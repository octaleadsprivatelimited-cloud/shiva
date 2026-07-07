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
import { useDeleteTeamMember, useTeamMembers, useSaveTeamMember } from "@/hooks/useCmsFirestore";
import type { FirestoreTeamMember } from "@/types/cms";

const emptyTeamMember = (): FirestoreTeamMember => ({
  name: "",
  role: "",
  image: "👨‍🌾",
  bio: "",
  social: {
    youtube: "",
    instagram: "",
    linkedin: "",
  },
});

const TeamManagement = () => {
  const { data: teamMembers = [], isPending, isError, error, refetch } = useTeamMembers();
  const saveTeamMember = useSaveTeamMember();
  const deleteTeamMember = useDeleteTeamMember();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<FirestoreTeamMember>(emptyTeamMember());
  const [editingId, setEditingId] = useState<string | null>(null);

  const openNew = () => {
    setEditingId(null);
    setForm(emptyTeamMember());
    setDialogOpen(true);
  };

  const openEdit = (id: string, row: FirestoreTeamMember) => {
    setEditingId(id);
    setForm({
      name: row.name,
      role: row.role,
      image: row.image,
      bio: row.bio,
      social: {
        youtube: row.social?.youtube ?? "",
        instagram: row.social?.instagram ?? "",
        linkedin: row.social?.linkedin ?? "",
      },
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.name.trim() || !form.role.trim()) {
      toast.error("Name and role are required.");
      return;
    }
    try {
      await saveTeamMember.mutateAsync({ id: editingId ?? undefined, data: { ...form } });
      toast.success(editingId ? "Updated" : "Added");
      setDialogOpen(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this team member?")) return;
    try {
      await deleteTeamMember.mutateAsync(id);
      toast.success("Deleted");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not delete");
    }
  };

  return (
    <AdminLayout title="Team Management">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            Manage your agricultural clinic expert list shown on the <strong>/team</strong> page.
          </p>
          <Button className="gap-2" onClick={openNew}>
            <Plus className="h-4 w-4" />
            Add member
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
          {teamMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-4 flex items-start gap-4 justify-between">
                <div className="flex gap-3">
                  <div className="text-4xl w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    {member.image}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base truncate">{member.name}</h3>
                    <p className="text-xs text-primary font-medium">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-3">{member.bio}</p>
                    {member.social && (
                      <div className="flex gap-2 mt-2 text-muted-foreground text-xxs">
                        {member.social.youtube && <span className="underline truncate max-w-[100px]">YouTube</span>}
                        {member.social.instagram && <span className="underline truncate max-w-[100px]">Instagram</span>}
                        {member.social.linkedin && <span className="underline truncate max-w-[100px]">LinkedIn</span>}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(member.id, member)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => void handleDelete(member.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!isPending && teamMembers.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No team members in Firestore. Use <strong>Settings → Import defaults</strong> to seed standard experts, or add them here.
          </p>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Team Member" : "New Team Member"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Role/Designation</Label>
              <Input value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Avatar/Image (Emoji or URL)</Label>
              <Input value={form.image} onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Bio</Label>
              <Textarea
                rows={3}
                value={form.bio}
                onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
              />
            </div>
            <div className="border-t pt-2 mt-2 space-y-2">
              <h4 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">Social Profiles</h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2">
                  <Label className="w-20 text-xs text-muted-foreground">YouTube</Label>
                  <Input
                    className="h-8 text-xs"
                    value={form.social?.youtube ?? ""}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        social: { ...f.social, youtube: e.target.value },
                      }))
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label className="w-20 text-xs text-muted-foreground">Instagram</Label>
                  <Input
                    className="h-8 text-xs"
                    value={form.social?.instagram ?? ""}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        social: { ...f.social, instagram: e.target.value },
                      }))
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label className="w-20 text-xs text-muted-foreground">LinkedIn</Label>
                  <Input
                    className="h-8 text-xs"
                    value={form.social?.linkedin ?? ""}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        social: { ...f.social, linkedin: e.target.value },
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => void handleSave()} disabled={saveTeamMember.isPending}>
              {saveTeamMember.isPending ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default TeamManagement;
