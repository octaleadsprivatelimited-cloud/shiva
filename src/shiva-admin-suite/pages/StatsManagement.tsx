import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Trash2, Database, TrendingUp, HelpCircle } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  useDeleteStat,
  useFirestoreStats,
  useSaveStat,
} from "@/hooks/useCmsFirestore";
import type { FirestoreStat } from "@/types/cms";
import { seedStatsToFirestore } from "@/lib/seedCms";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

const emptyStat = (type: "impact" | "social"): FirestoreStat => ({
  type,
  label: "",
  value: "",
  suffix: "",
  subtext: "",
  iconName: type === "impact" ? "Leaf" : "Youtube",
  color: type === "social" ? "#FF0000" : "",
  bgColor: type === "social" ? "bg-red-500/10 text-red-500" : "",
  order: 1,
});

const iconOptions = [
  "Users",
  "TrendingUp",
  "IndianRupee",
  "Shield",
  "Leaf",
  "Youtube",
  "Instagram",
  "Facebook",
  "Eye",
  "Star",
  "Activity",
  "Target",
  "Award",
  "Heart",
];

const brandPresets = [
  { name: "YouTube Red", icon: "Youtube", color: "#FF0000", bgColor: "bg-red-500/10 text-red-500" },
  { name: "Instagram Pink", icon: "Instagram", color: "#E1306C", bgColor: "bg-pink-500/10 text-pink-500" },
  { name: "Facebook Blue", icon: "Facebook", color: "#1877F2", bgColor: "bg-blue-500/10 text-blue-500" },
  { name: "Orange Views / Eye", icon: "Eye", color: "#ff6b35", bgColor: "bg-orange-500/10 text-orange-500" },
  { name: "Custom Teal", icon: "Star", color: "#0d9488", bgColor: "bg-teal-500/10 text-teal-500" },
];

const StatsManagement = () => {
  const { data: stats = [], isPending, isError, error, refetch } = useFirestoreStats();
  const saveStat = useSaveStat();
  const deleteStat = useDeleteStat();

  const [activeTab, setActiveTab] = useState<"impact" | "social">("impact");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<FirestoreStat>(emptyStat("impact"));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);

  const filteredStats = stats.filter((s) => s.type === activeTab);

  const openNew = () => {
    setEditingId(null);
    setForm({
      ...emptyStat(activeTab),
      order: stats.length + 1,
    });
    setDialogOpen(true);
  };

  const openEdit = (id: string, row: FirestoreStat) => {
    setEditingId(id);
    setForm({
      type: row.type || "impact",
      label: row.label,
      value: row.value,
      suffix: row.suffix || "",
      subtext: row.subtext || "",
      iconName: row.iconName || "Leaf",
      color: row.color || "",
      bgColor: row.bgColor || "",
      order: row.order ?? 1,
    });
    setDialogOpen(true);
  };

  const applyPreset = (preset: typeof brandPresets[0]) => {
    setForm((f) => ({
      ...f,
      iconName: preset.icon,
      color: preset.color,
      bgColor: preset.bgColor,
    }));
    toast.success(`Applied ${preset.name} settings.`);
  };

  const handleSave = async () => {
    if (!form.label.trim()) {
      toast.error("Statistic label is required.");
      return;
    }
    if (!form.value.trim()) {
      toast.error("Statistic value is required.");
      return;
    }
    try {
      await saveStat.mutateAsync({
        id: editingId ?? undefined,
        data: {
          ...form,
          order: Number(form.order),
        },
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
    return IconComponent ? <IconComponent className="h-5 w-5" /> : <Icons.HelpCircle className="h-5 w-5" />;
  };

  return (
    <AdminLayout title="Stats Management">
      <Tabs defaultValue="impact" value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <TabsList className="bg-muted p-1 rounded-lg">
            <TabsTrigger value="impact" className="px-4 py-2 text-sm font-semibold rounded-md">
              Impact (Bento Grid)
            </TabsTrigger>
            <TabsTrigger value="social" className="px-4 py-2 text-sm font-semibold rounded-md">
              Social Media Reach
            </TabsTrigger>
          </TabsList>
          
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

        <TabsContent value="impact" className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Manage impact figures (Farmers Empowered, Crop Yields, Incomes, etc.) displaying in the bento layout.
          </p>
        </TabsContent>
        <TabsContent value="social" className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Manage reach figures (YouTube Subscribers, Instagram Followers, Facebook Followers, Total Views) on social cards.
          </p>
        </TabsContent>

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
          {filteredStats.map((stat) => (
            <Card key={stat.id} className="hover:shadow-md transition-all border border-muted group relative overflow-hidden bg-card">
              <CardContent className="p-5 flex items-start gap-4">
                <div 
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                    stat.type === "social" && stat.bgColor ? stat.bgColor : "bg-accent/10 text-accent"
                  )}
                  style={stat.type === "social" && stat.color ? { color: stat.color } : undefined}
                >
                  {getIcon(stat.iconName)}
                </div>
                <div className="min-w-0 flex-1">
                  <div 
                    className="flex items-baseline gap-1 text-2xl font-bold"
                    style={stat.type === "social" && stat.color ? { color: stat.color } : { color: "var(--accent)" }}
                  >
                    <span>{stat.value}</span>
                    {stat.type === "impact" && <span>{stat.suffix}</span>}
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mt-1">{stat.label}</h4>
                  {stat.type === "impact" && (
                    <p className="text-xs text-muted-foreground/80 mt-1 leading-relaxed line-clamp-2">
                      {stat.subtext}
                    </p>
                  )}
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

        {!isPending && filteredStats.length === 0 && (
          <div className="rounded-xl border border-dashed border-muted p-12 text-center">
            <TrendingUp className="h-10 w-10 text-muted-foreground/60 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">No statistics found in this category</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
              Please click "Add stat" or use "Seed defaults" to populate the website data.
            </p>
          </div>
        )}
      </Tabs>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "Edit" : "New"}{" "}
              {form.type === "impact" ? "Impact Statistic" : "Social Media Statistic"}
            </DialogTitle>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto pr-2 py-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="stat-value">Statistic Value</Label>
                <Input
                  id="stat-value"
                  placeholder={form.type === "impact" ? "e.g. 50000" : "e.g. 6M+"}
                  value={form.value}
                  onChange={(e) => setForm((f) => ({ ...f, value: e.target.value }))}
                />
              </div>
              {form.type === "impact" ? (
                <div className="space-y-2">
                  <Label htmlFor="stat-suffix">Suffix</Label>
                  <Input
                    id="stat-suffix"
                    placeholder="e.g. + or %"
                    value={form.suffix}
                    onChange={(e) => setForm((f) => ({ ...f, suffix: e.target.value }))}
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="stat-order">Display Order</Label>
                  <Input
                    id="stat-order"
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm((f) => ({ ...f, order: Number(e.target.value) }))}
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="stat-label">Label / Title</Label>
              <Input
                id="stat-label"
                placeholder={form.type === "impact" ? "e.g. Farmers Empowered" : "e.g. YouTube Subscribers"}
                value={form.label}
                onChange={(e) => setForm((f) => ({ ...f, label: e.target.value }))}
              />
            </div>

            {form.type === "impact" && (
              <div className="space-y-2">
                <Label htmlFor="stat-subtext">Description Subtext</Label>
                <Textarea
                  id="stat-subtext"
                  placeholder="Describe this impact statistic..."
                  className="resize-none h-16"
                  value={form.subtext}
                  onChange={(e) => setForm((f) => ({ ...f, subtext: e.target.value }))}
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="stat-icon">Icon Shape</Label>
                <select
                  id="stat-icon"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
              {form.type === "impact" && (
                <div className="space-y-2">
                  <Label htmlFor="stat-order">Display Order</Label>
                  <Input
                    id="stat-order"
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm((f) => ({ ...f, order: Number(e.target.value) }))}
                  />
                </div>
              )}
            </div>

            {form.type === "social" && (
              <div className="space-y-3 p-3 bg-muted/30 border border-muted rounded-xl">
                <span className="text-xs font-bold text-muted-foreground block mb-1">Brand Presets</span>
                <div className="flex flex-wrap gap-2">
                  {brandPresets.map((preset) => (
                    <Button
                      key={preset.name}
                      variant="outline"
                      size="sm"
                      className="text-xs px-2.5 py-1 h-auto"
                      onClick={() => applyPreset(preset)}
                    >
                      {preset.name}
                    </Button>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="space-y-2">
                    <Label htmlFor="stat-color">Hex Brand Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="stat-color"
                        className="font-mono text-xs"
                        value={form.color}
                        onChange={(e) => setForm((f) => ({ ...f, color: e.target.value }))}
                      />
                      <input 
                        type="color" 
                        value={form.color && form.color.startsWith("#") ? form.color : "#FF0000"} 
                        className="w-10 h-10 p-0 border border-input rounded-md cursor-pointer shrink-0"
                        onChange={(e) => setForm((f) => ({ ...f, color: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stat-bg">Bg / Text Class</Label>
                    <Input
                      id="stat-bg"
                      className="font-mono text-xs"
                      placeholder="bg-red-500/10 text-red-500"
                      value={form.bgColor}
                      onChange={(e) => setForm((f) => ({ ...f, bgColor: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Live Visual Preview Card */}
            <div className="border border-dashed border-muted rounded-xl p-4 bg-muted/40">
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-2">Live Web Preview</span>
              {form.type === "impact" ? (
                <div className="bg-primary rounded-xl p-4 text-left border border-white/[0.08] relative overflow-hidden">
                  <div className="flex justify-between items-center gap-4 relative z-10">
                    <div>
                      <div className="text-2xl font-bold text-accent">
                        {form.value}{form.suffix || ""}
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
              ) : (
                <div className="relative rounded-2xl bg-card border border-border p-4 flex flex-col justify-between min-h-[140px] max-w-sm mx-auto shadow-sm">
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-[0.02] pointer-events-none" 
                    style={{ backgroundColor: form.color }}
                  />
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center",
                      form.bgColor ? form.bgColor : "bg-red-500/10 text-red-500"
                    )}>
                      {(() => {
                        const PreviewIcon = (Icons as any)[form.iconName] || Icons.Eye;
                        return <PreviewIcon className="w-4 h-4" />;
                      })()}
                    </div>
                  </div>
                  <div>
                    <div 
                      className="text-2xl font-bold tracking-tight mb-0.5"
                      style={{ color: form.color || "#FF0000" }}
                    >
                      {form.value || "0.0M"}
                    </div>
                    <div className="text-[11px] font-semibold text-foreground/80 leading-snug">
                      {form.label || "Social Stat Label"}
                    </div>
                  </div>
                </div>
              )}
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
