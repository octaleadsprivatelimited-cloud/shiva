import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useDeleteProduct, useProducts, useSaveProduct } from "@/hooks/useCmsFirestore";
import type { FirestoreProduct } from "@/types/cms";
import { AdminImageUpload } from "../components/AdminImageUpload";

const stockColors = {
  "in-stock": "default" as const,
  low: "secondary" as const,
  out: "destructive" as const,
};
const stockLabels = { "in-stock": "In Stock", low: "Low Stock", out: "Out of Stock" };

const emptyProduct = (): FirestoreProduct => ({
  name: "",
  category: "",
  price: "",
  stock: "in-stock",
  description: "",
  href: "",
  imageUrl: "",
});

const ProductManagement = () => {
  const { data: products = [], isPending, isError, error, refetch } = useProducts();
  const saveProduct = useSaveProduct();
  const deleteProduct = useDeleteProduct();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<FirestoreProduct>(emptyProduct());
  const [editingId, setEditingId] = useState<string | null>(null);

  const openNew = () => {
    setEditingId(null);
    setForm(emptyProduct());
    setDialogOpen(true);
  };

  const openEdit = (id: string, row: FirestoreProduct) => {
    setEditingId(id);
    setForm({
      name: row.name,
      category: row.category,
      price: row.price,
      stock: row.stock,
      description: row.description,
      href: row.href ?? "",
      imageUrl: row.imageUrl ?? "",
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.name.trim()) {
      toast.error("Name is required.");
      return;
    }
    try {
      await saveProduct.mutateAsync({ id: editingId ?? undefined, data: { ...form } });
      toast.success(editingId ? "Updated" : "Added");
      setDialogOpen(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product row?")) return;
    try {
      await deleteProduct.mutateAsync(id);
      toast.success("Deleted");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not delete");
    }
  };

  return (
    <AdminLayout title="Products & Services">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            These cards power the <strong>/products</strong> highlights. Use &quot;Learn more&quot; link (href) for
            internal routes like /products/seeds.
          </p>
          <Button className="gap-2" onClick={openNew}>
            <Plus className="h-4 w-4" />
            Add product
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
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0 flex gap-3">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt=""
                        className="h-14 w-14 rounded-md object-cover border shrink-0"
                      />
                    ) : null}
                    <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-medium">{product.name}</h3>
                      <Badge variant={stockColors[product.stock]} className="shrink-0">
                        {stockLabels[product.stock]}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="text-sm font-semibold text-primary">{product.price || "—"}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{product.category}</span>
                      {product.href ? (
                        <>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs font-mono truncate max-w-[200px]">{product.href}</span>
                        </>
                      ) : null}
                    </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(product.id, product)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => void handleDelete(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!isPending && products.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No products in Firestore. Use <strong>Settings → Import defaults</strong> for the three current highlights,
            or add rows here.
          </p>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit product" : "New product"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Input value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Price (display)</Label>
              <Input value={form.price} onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Stock</Label>
              <Select
                value={form.stock}
                onValueChange={(v) => setForm((f) => ({ ...f, stock: v as FirestoreProduct["stock"] }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-stock">In stock</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="out">Out</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                rows={3}
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Link (href)</Label>
              <Input
                placeholder="/products/seeds"
                value={form.href ?? ""}
                onChange={(e) => setForm((f) => ({ ...f, href: e.target.value }))}
              />
            </div>
            <AdminImageUpload
              label="Card image (optional)"
              value={form.imageUrl ?? ""}
              onChange={(v) => setForm((f) => ({ ...f, imageUrl: v }))}
              onClear={() => setForm((f) => ({ ...f, imageUrl: "" }))}
              helperText="Optional image on the public /products cards. Compressed JPEG stored in Firestore."
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => void handleSave()} disabled={saveProduct.isPending}>
              {saveProduct.isPending ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default ProductManagement;
