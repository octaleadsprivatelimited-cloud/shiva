import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";
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
import { useDeleteCareer, useCareers, useSaveCareer } from "@/hooks/useCmsFirestore";
import type { FirestoreCareer } from "@/types/cms";

const emptyCareer = (): FirestoreCareer => ({
  title: "",
  location: "",
  type: "Full-time",
  experience: "",
  description: "",
});

const CareersManagement = () => {
  const { data: careers = [], isPending, isError, error, refetch } = useCareers();
  const saveCareer = useSaveCareer();
  const deleteCareer = useDeleteCareer();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<FirestoreCareer>(emptyCareer());
  const [editingId, setEditingId] = useState<string | null>(null);

  const openNew = () => {
    setEditingId(null);
    setForm(emptyCareer());
    setDialogOpen(true);
  };

  const openEdit = (id: string, row: FirestoreCareer) => {
    setEditingId(id);
    setForm({
      title: row.title,
      location: row.location,
      type: row.type,
      experience: row.experience,
      description: row.description,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.title.trim()) {
      toast.error("Job title is required.");
      return;
    }
    try {
      await saveCareer.mutateAsync({ id: editingId ?? undefined, data: { ...form } });
      toast.success(editingId ? "Updated" : "Added");
      setDialogOpen(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this career opening?")) return;
    try {
      await deleteCareer.mutateAsync(id);
      toast.success("Deleted");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not delete");
    }
  };

  return (
    <AdminLayout title="Career Openings">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            Manage job vacancies listed on the public <strong>/careers</strong> page.
          </p>
          <Button className="gap-2" onClick={openNew}>
            <Plus className="h-4 w-4" />
            Add position
          </Button>
        </div>
        {isPending && <p className="text-sm text-muted-foreground">Loading…</p>}
        {isError && (
          <p className="text-sm text-destructive">
            {(error as Error).message}{" "}
            <Button variant="outline" size="sm" className="ml-2" onClick={() => refetch()}>
              Retry
            </Button>
          </p>
        )}

        <div className="space-y-3">
          {careers.map((career) => (
            <Card key={career.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-4 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg">{career.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-1">
                    <span>{career.location}</span>
                    <span>•</span>
                    <span>{career.type}</span>
                    <span>•</span>
                    <span>{career.experience}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{career.description}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(career.id, career)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => void handleDelete(career.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!isPending && careers.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No careers in Firestore. Use <strong>Settings → Import defaults</strong> to seed standard roles, or add them here.
          </p>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Career Position" : "New Career Position"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Location</Label>
              <Input value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Job Type (e.g. Full-time, Remote)</Label>
              <Input value={form.type} onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Experience Required</Label>
              <Input value={form.experience} onChange={(e) => setForm((f) => ({ ...f, experience: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                rows={4}
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => void handleSave()} disabled={saveCareer.isPending}>
              {saveCareer.isPending ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default CareersManagement;
