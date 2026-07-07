import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Trash2, Play } from "lucide-react";
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
import { useDeleteVideo, useVideos, useSaveVideo } from "@/hooks/useCmsFirestore";
import type { FirestoreVideo } from "@/types/cms";

const emptyVideo = (): FirestoreVideo => ({
  id: "",
  title: "",
  category: "",
  views: "",
  duration: "",
});

const VideosManagement = () => {
  const { data: videos = [], isPending, isError, error, refetch } = useVideos();
  const saveVideo = useSaveVideo();
  const deleteVideo = useDeleteVideo();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<FirestoreVideo>(emptyVideo());
  const [editingId, setEditingId] = useState<string | null>(null);

  const openNew = () => {
    setEditingId(null);
    setForm(emptyVideo());
    setDialogOpen(true);
  };

  const openEdit = (id: string, row: FirestoreVideo) => {
    setEditingId(id);
    setForm({
      id: row.id,
      title: row.title,
      category: row.category,
      views: row.views ?? "",
      duration: row.duration ?? "",
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.id.trim() || !form.title.trim()) {
      toast.error("YouTube ID and title are required.");
      return;
    }
    try {
      await saveVideo.mutateAsync({ id: editingId ?? undefined, data: { ...form } });
      toast.success(editingId ? "Updated" : "Added");
      setDialogOpen(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this video entry?")) return;
    try {
      await deleteVideo.mutateAsync(id);
      toast.success("Deleted");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not delete");
    }
  };

  return (
    <AdminLayout title="Video Management">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            Manage YouTube guides and case study videos displayed on the public <strong>/videos</strong> page.
          </p>
          <Button className="gap-2" onClick={openNew}>
            <Plus className="h-4 w-4" />
            Add video
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videos.map((video) => (
            <Card key={video.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-4 flex items-start gap-4 justify-between">
                <div className="flex gap-3 min-w-0">
                  <div className="relative w-24 aspect-video bg-muted rounded-md overflow-hidden shrink-0 border">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm truncate" title={video.title}>
                      {video.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">Category: {video.category}</p>
                    <p className="text-xxs font-mono text-muted-foreground mt-1 truncate">ID: {video.id}</p>
                    {(video.views || video.duration) && (
                      <p className="text-xxs text-muted-foreground mt-1">
                        {video.views ? `${video.views} views ` : ""}
                        {video.duration ? `• ${video.duration} duration` : ""}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(video.id, video)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => void handleDelete(video.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!isPending && videos.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No videos in Firestore. Use <strong>Settings → Import defaults</strong> to seed standard farming videos, or add them here.
          </p>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Video" : "New Video"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div className="space-y-2">
              <Label>YouTube Video ID</Label>
              <Input
                placeholder="e.g. LXF8l0jNKII"
                value={form.id}
                onChange={(e) => setForm((f) => ({ ...f, id: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Input value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Views (Optional)</Label>
              <Input value={form.views} onChange={(e) => setForm((f) => ({ ...f, views: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Duration (Optional)</Label>
              <Input value={form.duration} onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => void handleSave()} disabled={saveVideo.isPending}>
              {saveVideo.isPending ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default VideosManagement;
