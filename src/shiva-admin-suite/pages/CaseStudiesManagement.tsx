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
import { useDeleteCaseStudy, useCaseStudies, useSaveCaseStudy } from "@/hooks/useCmsFirestore";
import type { FirestoreCaseStudy } from "@/types/cms";
import { AdminImageUpload } from "../components/AdminImageUpload";

const emptyCaseStudy = (): FirestoreCaseStudy => ({
  title: "",
  category: "",
  location: "",
  farmer: "",
  challenge: "",
  solution: "",
  results: [],
  imageUrl: "",
});

const CaseStudiesManagement = () => {
  const { data: caseStudies = [], isPending, isError, error, refetch } = useCaseStudies();
  const saveCaseStudy = useSaveCaseStudy();
  const deleteCaseStudy = useDeleteCaseStudy();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<FirestoreCaseStudy>(emptyCaseStudy());
  const [resultsText, setResultsText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const openNew = () => {
    setEditingId(null);
    setForm(emptyCaseStudy());
    setResultsText("");
    setDialogOpen(true);
  };

  const openEdit = (id: string, row: FirestoreCaseStudy) => {
    setEditingId(id);
    setForm({
      title: row.title,
      category: row.category,
      location: row.location,
      farmer: row.farmer,
      challenge: row.challenge,
      solution: row.solution,
      results: row.results ?? [],
      imageUrl: row.imageUrl ?? "",
    });
    setResultsText((row.results ?? []).join("\n"));
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.title.trim() || !form.farmer.trim()) {
      toast.error("Title and Farmer name are required.");
      return;
    }
    const results = resultsText
      .split("\n")
      .map((r) => r.trim())
      .filter((r) => r.length > 0);

    try {
      await saveCaseStudy.mutateAsync({
        id: editingId ?? undefined,
        data: { ...form, results },
      });
      toast.success(editingId ? "Updated" : "Added");
      setDialogOpen(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this case study?")) return;
    try {
      await deleteCaseStudy.mutateAsync(id);
      toast.success("Deleted");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not delete");
    }
  };

  return (
    <AdminLayout title="Case Studies Management">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            Manage success stories featured on the public <strong>/case-studies</strong> page.
          </p>
          <Button className="gap-2" onClick={openNew}>
            <Plus className="h-4 w-4" />
            Add case study
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
          {caseStudies.map((study) => (
            <Card key={study.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0 flex gap-4">
                    {study.imageUrl ? (
                      <img
                        src={study.imageUrl}
                        alt=""
                        className="h-16 w-24 rounded-md object-cover border shrink-0 bg-muted"
                      />
                    ) : null}
                    <div className="min-w-0">
                      <h3 className="font-semibold text-base">{study.title}</h3>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-1">
                        <span>Farmer: {study.farmer}</span>
                        <span>•</span>
                        <span>Location: {study.location}</span>
                        <span>•</span>
                        <span className="text-primary font-medium">{study.category}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                        <strong>Challenge:</strong> {study.challenge}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {(study.results ?? []).map((r, i) => (
                          <span
                            key={i}
                            className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xxs font-medium"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(study.id, study)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => void handleDelete(study.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!isPending && caseStudies.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No case studies in Firestore. Use <strong>Settings → Import defaults</strong> to seed standard success stories, or add them here.
          </p>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Case Study" : "New Case Study"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2 text-left">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Category</Label>
                <Input value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Farmer Name</Label>
              <Input value={form.farmer} onChange={(e) => setForm((f) => ({ ...f, farmer: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Challenge</Label>
              <Textarea
                rows={2}
                value={form.challenge}
                onChange={(e) => setForm((f) => ({ ...f, challenge: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Solution</Label>
              <Textarea
                rows={2}
                value={form.solution}
                onChange={(e) => setForm((f) => ({ ...f, solution: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Results (one per line)</Label>
              <Textarea
                rows={3}
                placeholder="200% yield increase&#10;50% water savings"
                value={resultsText}
                onChange={(e) => setResultsText(e.target.value)}
              />
            </div>
            <AdminImageUpload
              label="Success photo (optional)"
              value={form.imageUrl ?? ""}
              onChange={(v) => setForm((f) => ({ ...f, imageUrl: v }))}
              onClear={() => setForm((f) => ({ ...f, imageUrl: "" }))}
              helperText="Optional image. Compressed JPEG stored in Firestore."
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => void handleSave()} disabled={saveCaseStudy.isPending}>
              {saveCaseStudy.isPending ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default CaseStudiesManagement;
