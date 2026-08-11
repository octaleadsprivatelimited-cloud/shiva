import { useState } from "react";
import { Edit, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { AdminLayout } from "../components/AdminLayout";
import { AdminImageUpload } from "../components/AdminImageUpload";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useBrandPartners,
  useDeleteBrandPartner,
  useSaveBrandPartner,
} from "@/hooks/useCmsFirestore";
import type { FirestoreBrandPartner } from "@/types/cms";
import { defaultBrandPartners } from "@/data/brandPartners";

const emptyPartner = (): FirestoreBrandPartner => ({
  name: "",
  logo: "",
  website: "",
  order: 0,
});

export default function BrandPartnersManagement() {
  const { data: partners = [], isPending, isError, error, refetch } = useBrandPartners();
  const savePartner = useSaveBrandPartner();
  const deletePartner = useDeleteBrandPartner();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FirestoreBrandPartner>(emptyPartner());

  const openNew = () => {
    setEditingId(null);
    setForm({ ...emptyPartner(), order: partners.length + 1 });
    setDialogOpen(true);
  };

  const openEdit = (id: string, row: FirestoreBrandPartner) => {
    setEditingId(id);
    setForm({ name: row.name, logo: row.logo, website: row.website ?? "", order: row.order ?? 0 });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.name.trim()) {
      toast.error("Partner name is required.");
      return;
    }
    if (!form.logo) {
      toast.error("Please upload a partner logo.");
      return;
    }
    try {
      await savePartner.mutateAsync({ id: editingId ?? undefined, data: form });
      toast.success(editingId ? "Brand partner updated" : "Brand partner added");
      setDialogOpen(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save brand partner");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this brand partner?")) return;
    try {
      await deletePartner.mutateAsync(id);
      toast.success("Brand partner deleted");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not delete brand partner");
    }
  };

  return (
    <AdminLayout title="Brand Partners">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">Manage the partner logos displayed on the homepage.</p>
          <Button className="gap-2" onClick={openNew}>
            <Plus className="h-4 w-4" /> Add partner
          </Button>
        </div>

        {isPending && <p className="text-sm text-muted-foreground">Loading…</p>}
        {isError && (
          <p className="text-sm text-destructive">
            {(error as Error).message}
            <Button variant="outline" size="sm" className="ml-2" onClick={() => void refetch()}>Retry</Button>
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {defaultBrandPartners.map((partner) => (
            <Card key={partner.id}>
              <CardContent className="p-4">
                <div className="h-28 rounded-lg border bg-muted flex items-center justify-center overflow-hidden mb-3">
                  <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain p-3" />
                </div>
                <h3 className="font-semibold truncate">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">Existing built-in partner</p>
              </CardContent>
            </Card>
          ))}
          {partners.map((partner) => (
            <Card key={partner.id}>
              <CardContent className="p-4">
                <div className="h-28 rounded-lg border bg-muted flex items-center justify-center overflow-hidden mb-3">
                  <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain p-3" />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold truncate">{partner.name}</h3>
                    <p className="text-xs text-muted-foreground">Display order: {partner.order}</p>
                    {partner.website && <p className="text-xs text-muted-foreground truncate mt-1">{partner.website}</p>}
                  </div>
                  <div className="flex shrink-0">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(partner.id, partner)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive" onClick={() => void handleDelete(partner.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editingId ? "Edit Brand Partner" : "New Brand Partner"}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="partner-name">Partner name</Label>
              <Input id="partner-name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
            </div>
            <AdminImageUpload
              label="Partner logo"
              value={form.logo}
              onChange={(logo) => setForm((f) => ({ ...f, logo }))}
              onClear={() => setForm((f) => ({ ...f, logo: "" }))}
              disabled={savePartner.isPending}
              helperText="The logo is automatically resized and compressed before saving."
            />
            <div className="space-y-2">
              <Label htmlFor="partner-website">Website (optional)</Label>
              <Input id="partner-website" type="url" placeholder="https://example.com" value={form.website ?? ""} onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="partner-order">Display order</Label>
              <Input id="partner-order" type="number" min="0" value={form.order} onChange={(e) => setForm((f) => ({ ...f, order: Number(e.target.value) }))} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => void handleSave()} disabled={savePartner.isPending}>
              {savePartner.isPending ? "Saving…" : "Save partner"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
