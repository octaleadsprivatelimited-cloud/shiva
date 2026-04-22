import { AdminLayout } from "../components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Trash2, Mail, Phone } from "lucide-react";
import { useDeleteInquiry, useInquiries, useUpdateInquiry } from "@/hooks/useCmsFirestore";
import { toast } from "sonner";

const InquiriesPage = () => {
  const { data: inquiries = [], isPending, isError, error, refetch } = useInquiries();
  const updateInquiry = useUpdateInquiry();
  const deleteInquiry = useDeleteInquiry();

  const unread = inquiries.filter((i) => i.read !== true).length;

  const markRead = async (id: string) => {
    try {
      await updateInquiry.mutateAsync({ id, patch: { read: true } });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Update failed");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    try {
      await deleteInquiry.mutateAsync(id);
      toast.success("Deleted");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Delete failed");
    }
  };

  return (
    <AdminLayout title="Contact Inquiries">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            {unread} unread — submissions come from the website contact form.
          </p>
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
          {inquiries.map((inquiry) => (
            <Card
              key={inquiry.id}
              className={`hover:shadow-sm transition-shadow ${inquiry.read !== true ? "border-l-4 border-l-primary" : ""}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-medium">{inquiry.name}</h3>
                      {inquiry.read !== true && <Badge className="shrink-0">New</Badge>}
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {inquiry.email}
                      </span>
                      {inquiry.phone ? (
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {inquiry.phone}
                        </span>
                      ) : null}
                    </div>
                    {inquiry.subject ? <p className="text-sm font-medium mb-1">Subject: {inquiry.subject}</p> : null}
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">{inquiry.message}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {inquiry.read !== true && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => void markRead(inquiry.id)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => void handleDelete(inquiry.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!isPending && inquiries.length === 0 && (
          <p className="text-sm text-muted-foreground">No inquiries yet. They appear when visitors submit the contact form.</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default InquiriesPage;
