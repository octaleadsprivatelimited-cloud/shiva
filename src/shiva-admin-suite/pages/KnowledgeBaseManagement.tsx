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
import { toast } from "sonner";
import {
  useDeleteKnowledgeBaseArticle,
  useKnowledgeBaseArticles,
  useSaveKnowledgeBaseArticle,
} from "@/hooks/useCmsFirestore";
import type { FirestoreKnowledgeBaseArticle } from "@/types/cms";

const emptyArticle = (): FirestoreKnowledgeBaseArticle => ({
  title: "",
  category: "Crop Management",
  readTime: "",
});

const KnowledgeBaseManagement = () => {
  const { data: articles = [], isPending, isError, error, refetch } = useKnowledgeBaseArticles();
  const saveArticle = useSaveKnowledgeBaseArticle();
  const deleteArticle = useDeleteKnowledgeBaseArticle();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<FirestoreKnowledgeBaseArticle>(emptyArticle());
  const [editingId, setEditingId] = useState<string | null>(null);

  const openNew = () => {
    setEditingId(null);
    setForm(emptyArticle());
    setDialogOpen(true);
  };

  const openEdit = (id: string, row: FirestoreKnowledgeBaseArticle) => {
    setEditingId(id);
    setForm({
      title: row.title,
      category: row.category,
      readTime: row.readTime,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.title.trim()) {
      toast.error("Article title is required.");
      return;
    }
    try {
      await saveArticle.mutateAsync({ id: editingId ?? undefined, data: { ...form } });
      toast.success(editingId ? "Updated" : "Added");
      setDialogOpen(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this article entry?")) return;
    try {
      await deleteArticle.mutateAsync(id);
      toast.success("Deleted");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not delete");
    }
  };

  return (
    <AdminLayout title="Knowledge Base Articles">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            Manage popular articles displayed on the public <strong>/knowledge-base</strong> page.
          </p>
          <Button className="gap-2" onClick={openNew}>
            <Plus className="h-4 w-4" />
            Add article
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
          {articles.map((art) => (
            <Card key={art.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-4 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base truncate">{art.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1 flex-wrap">
                    <span className="text-primary font-medium">{art.category}</span>
                    <span>•</span>
                    <span>{art.readTime || "—"}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(art.id, art)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => void handleDelete(art.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!isPending && articles.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No articles in Firestore. Use <strong>Settings → Import defaults</strong> to seed popular resources, or add them here.
          </p>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Article" : "New Article"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Input value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Read Time (e.g. 10 min)</Label>
              <Input value={form.readTime} onChange={(e) => setForm((f) => ({ ...f, readTime: e.target.value }))} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => void handleSave()} disabled={saveArticle.isPending}>
              {saveArticle.isPending ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default KnowledgeBaseManagement;
