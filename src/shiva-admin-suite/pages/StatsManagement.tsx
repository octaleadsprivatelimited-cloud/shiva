import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Trash2, Database, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  useDeleteStat,
  useFirestoreStats,
  useSaveStat,
} from "@/hooks/useCmsFirestore";
import type { FirestoreStat } from "@/types/cms";
import { seedStatsToFirestore } from "@/lib/seedCms";
import * as Icons from "lucide-react";

const emptyStat = (): FirestoreStat => ({
  label: "",
  value: 0,
  suffix: "",
  subtext: "",
  iconName: "Leaf",
  order: 1,
});

const iconOptions = [
  "Users",
  "TrendingUp",
  "IndianRupee",
  "Shield",
  "Leaf",
  "Star",
  "Activity",
  "Target",
  "Award",
  "Heart",
];

const StatsManagement = () => {
  const { data: stats = [], isPending, isError, error, refetch } = useFirestoreStats();
  const saveStat = useSaveStat();
  const deleteStat = useDeleteStat();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<FirestoreStat>(emptyStat());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);

  const openNew = () => {
    setEditingId(null);
    setForm({
      ...emptyStat(),
      order: stats.length + 1
    });
    setDialogOpen(true);
  };

  const openEdit = (id: string, row: FirestoreStat) => {
    setEditingId(id);
    setForm({
      label: row.label,
      value: row.value,
      suffix: row.suffix || "",
      subtext: row.subtext || "",
      iconName: row.iconName || "Leaf",
      order: row.order ?? 1,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.label.trim()) {
      toast.error("Statistic label is required.");
      return;
    }
    if (isNaN(Number(form.value))) {
      toast.error("Statistic value must be a number.");
      return;
    }
    try {
      await saveStat.mutateAsync({ 
        id: editingId ?? undefined, 
        data: { 
          ...form,
          value: Number(form.value),
          order: Number(form.order)
        } 
      });
      toast.success(editingId ? "Statistic updated successfully" : "Statistic added successfully");
      setDialogOpen(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save statistic");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this statistic?")) return;
    try {
      await deleteStat.mutateAsync(id);
      toast.success("Statistic deleted successfully");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not delete statistic");
    }
  };

  const handleSeed = async () => {
    setSeeding(true);
    try {
      await seedStatsToFirestore();
      toast.success("Default statistics seeded successfully!");
      refetch();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not seed statistics");
    } finally {
      setSeeding(false);
    }
  };

  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    return IconComponent ? <IconComponent className="h-5 w-5 text-accent" /> : <Icons.Leaf className="h-5 w-5 text-accent" />;
  };

  return (
    <AdminLayout title="Stats Management">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Manage the statistics grid displayed in the <strong>"Our Impact"</strong> section of the Home Page.
          </p>
          <div className="flex items-center gap-2">
            {stats.length === 0 && (
              <Button variant="outline" className="gap-2" onClick={() => void handleSeed()} disabled={seeding}>
                <Database className="h-4 w-4" />
                {seeding ? "Seeding..." : "Seed defaults"}
              </Button>
            )}
            <Button className="gap-2" onClick={openNew}>
              <Plus className="h-4 w-4" />
              Add stat
            </Button>
          </div>
        </div>

        {isPending && <p className="text-sm text-muted-foreground">Loading statistics…</p>}
        {isError && (
          <p className="text-sm text-destructive">
            {(error as Error).message}{" "}
            <Button variant="outline" size="sm" className="ml-2" onClick={() => refetch()}>
              Retry
            </Button>
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.map((stat) => (
            <Card key={stat.id} className="hover:shadow-md transition-all border border-muted group relative overflow-hidden bg-card">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  {getIcon(stat.iconName)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-1 text-2xl font-bold text-accent">
                    <span>{stat.value.toLocaleString()}</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mt-1">{stat.label}</h4>
                  <p className="text-xs text-muted-foreground/80 mt-1 leading-relaxed line-clamp-2">
                    {stat.subtext}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[10px] bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-md w-fit font-medium">
                    Order: {stat.order}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(stat.id, stat)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => void handleDelete(stat.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!isPending && stats.length === 0 && (
          <div className="rounded-xl border border-dashed border-muted p-12 text-center">
            <TrendingUp className="h-10 w-10 text-muted-foreground/60 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">No statistics found</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
              Seeding the default stats will populate the homepage Bento Grid layout immediately.
            </p>
            <Button className="mt-4 gap-2" onClick={() => void handleSeed()} disabled={seeding}>
              <Database className="h-4 w-4" />
              {seeding ? "Seeding..." : "Seed default stats"}
            </Button>
          </div>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Statistic" : "New Statistic"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="stat-value">Numeric Value</Label>
                <Input
                  id="stat-value"
                  type="number"
                  placeholder="e.g. 50000"
                  value={form.value === 0 && !editingId ? "" : form.value}
                  onChange={(e) => setForm((f) => ({ ...f, value: Number(e.target.value) }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stat-suffix">Suffix</Label>
                <Input
                  id="stat-suffix"
                  placeholder="e.g. + or %"
                  value={form.suffix}
                  onChange={(e) => setForm((f) => ({ ...f, suffix: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="stat-label">Label / Title</Label>
              <Input
                id="stat-label"
                placeholder="e.g. Farmers Empowered"
                value={form.label}
                onChange={(e) => setForm((f) => ({ ...f, label: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stat-subtext">Description Subtext</Label>
              <Textarea
                id="stat-subtext"
                placeholder="Describe this impact statistic..."
                className="resize-none h-20"
                value={form.subtext}
                onChange={(e) => setForm((f) => ({ ...f, subtext: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="stat-icon">Icon Shape</Label>
                <select
                  id="stat-icon"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={form.iconName}
                  onChange={(e) => setForm((f) => ({ ...f, iconName: e.target.value }))}
                >
                  {iconOptions.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="stat-order">Display Order</Label>
                <Input
                  id="stat-order"
                  type="number"
                  placeholder="e.g. 1"
                  value={form.order}
                  onChange={(e) => setForm((f) => ({ ...f, order: Number(e.target.value) }))}
                />
              </div>
            </div>

            <div className="border border-dashed border-muted rounded-xl p-4 bg-muted/40">
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-2">Live Bento Grid Preview</span>
              <div className="bg-primary rounded-xl p-4 text-left border border-white/[0.08] relative overflow-hidden">
                <div className="flex justify-between items-center gap-4 relative z-10">
                  <div>
                    <div className="text-2xl font-bold text-accent">
                      {Number(form.value).toLocaleString()}{form.suffix || ""}
                    </div>
                    <h4 className="text-xs font-semibold text-primary-foreground mt-1">{form.label || "Untitled Stat"}</h4>
                    <p className="text-[10px] text-primary-foreground/60 mt-1 leading-relaxed max-w-[200px]">
                      {form.subtext || "No description text provided yet."}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    {(() => {
                      const PreviewIcon = (Icons as any)[form.iconName] || Icons.Leaf;
                      return <PreviewIcon className="w-5 h-5" />;
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => void handleSave()} disabled={saveStat.isPending}>
              {saveStat.isPending ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default StatsManagement;
