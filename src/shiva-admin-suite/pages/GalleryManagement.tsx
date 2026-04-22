import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2, ImageIcon, Video, Edit } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useDeleteGalleryItem, useGalleryItems, useSaveGalleryItem } from "@/hooks/useCmsFirestore";
import type { FirestoreGalleryItem } from "@/types/cms";
import { AdminImageUpload } from "../components/AdminImageUpload";

const emptyItem = (): FirestoreGalleryItem => ({
  title: "",
  category: "Farm Visit",
  imageUrl: "",
  type: "image",
  videoUrl: "",
});

const GalleryManagement = () => {
  const { data: items = [], isPending, isError, error, refetch } = useGalleryItems();
  const saveItem = useSaveGalleryItem();
  const deleteItem = useDeleteGalleryItem();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<FirestoreGalleryItem>(emptyItem());
  const [editingId, setEditingId] = useState<string | null>(null);

  const openNew = () => {
    setEditingId(null);
    setForm(emptyItem());
    setDialogOpen(true);
  };

  const openEdit = (id: string, row: FirestoreGalleryItem) => {
    setEditingId(id);
    setForm({
      title: row.title,
      category: row.category,
      imageUrl: row.imageUrl,
      type: row.type,
      videoUrl: row.videoUrl ?? "",
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.title.trim()) {
      toast.error("Title is required.");
      return;
    }
    if (form.type === "image" && !form.imageUrl.trim()) {
      toast.error("Upload an image for this gallery item.");
      return;
    }
    const data: FirestoreGalleryItem =
      form.type === "video"
        ? { ...form, imageUrl: "", videoUrl: form.videoUrl ?? "" }
        : { ...form, videoUrl: "" };
    try {
      await saveItem.mutateAsync({ id: editingId ?? undefined, data });
      toast.success(editingId ? "Updated" : "Added");
      setDialogOpen(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Remove this item from the website gallery?")) return;
    try {
      await deleteItem.mutateAsync(id);
      toast.success("Removed");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not delete");
    }
  };

  const images = items.filter((i) => i.type === "image");
  const videos = items.filter((i) => i.type === "video");

  const renderGrid = (list: typeof items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((item) => (
        <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-video bg-secondary flex items-center justify-center overflow-hidden">
            {item.type === "image" && item.imageUrl ? (
              <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
            ) : item.type === "image" ? (
              <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
            ) : (
              <Video className="h-10 w-10 text-muted-foreground/40" />
            )}
          </div>
          <CardContent className="p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
              <div className="flex shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(item.id, item)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive"
                  onClick={() => void handleDelete(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <AdminLayout title="Gallery">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            Upload images from your device; they are compressed and stored in Firestore. Videos still use a URL.
          </p>
          <Button className="gap-2" onClick={openNew}>
            <Plus className="h-4 w-4" />
            Add item
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

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All ({items.length})</TabsTrigger>
            <TabsTrigger value="images">Images ({images.length})</TabsTrigger>
            <TabsTrigger value="videos">Videos ({videos.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            {renderGrid(items)}
          </TabsContent>
          <TabsContent value="images" className="mt-4">
            {renderGrid(images)}
          </TabsContent>
          <TabsContent value="videos" className="mt-4">
            {renderGrid(videos)}
          </TabsContent>
        </Tabs>

        {!isPending && items.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No gallery items in Firestore. Use <strong>Settings → Import defaults</strong> to load current photos, or add
            items here.
          </p>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit gallery item" : "New gallery item"}</DialogTitle>
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
              <Label>Type</Label>
              <Select
                value={form.type}
                onValueChange={(v) => setForm((f) => ({ ...f, type: v as FirestoreGalleryItem["type"] }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {form.type === "image" ? (
              <AdminImageUpload
                label="Image"
                value={form.imageUrl}
                onChange={(v) => setForm((f) => ({ ...f, imageUrl: v }))}
                onClear={() => setForm((f) => ({ ...f, imageUrl: "" }))}
              />
            ) : (
              <div className="space-y-2">
                <Label>Video URL (YouTube embed or file URL)</Label>
                <Input
                  value={form.videoUrl ?? ""}
                  onChange={(e) => setForm((f) => ({ ...f, videoUrl: e.target.value }))}
                />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => void handleSave()} disabled={saveItem.isPending}>
              {saveItem.isPending ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default GalleryManagement;
