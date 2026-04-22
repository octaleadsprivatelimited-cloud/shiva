import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminLayout } from "../components/AdminLayout";
import { FileText, Image, ShoppingBag, MessageSquare, TrendingUp, Users, Eye } from "lucide-react";
import { useAdminBlogPosts, useGalleryItems, useInquiries, useProducts } from "@/hooks/useCmsFirestore";

const Dashboard = () => {
  const blogQ = useAdminBlogPosts();
  const galleryQ = useGalleryItems();
  const productsQ = useProducts();
  const inquiriesQ = useInquiries();

  const blogCount = blogQ.data?.length ?? 0;
  const galleryCount = galleryQ.data?.length ?? 0;
  const productCount = productsQ.data?.length ?? 0;
  const inquiryCount = inquiriesQ.data?.length ?? 0;
  const unreadInquiries = inquiriesQ.data?.filter((i) => i.read !== true).length ?? 0;

  const stats = [
    { title: "Blog posts", value: String(blogCount), icon: FileText, change: "In Firestore", color: "text-primary" },
    { title: "Gallery items", value: String(galleryCount), icon: Image, change: "Shown on /gallery", color: "text-info" },
    { title: "Products", value: String(productCount), icon: ShoppingBag, change: "Highlights on /products", color: "text-warning" },
    {
      title: "Inquiries",
      value: String(inquiryCount),
      icon: MessageSquare,
      change: `${unreadInquiries} unread`,
      color: "text-destructive",
    },
  ];

  const recentActivity = (inquiriesQ.data ?? []).slice(0, 6).map((i) => ({
    action: `Inquiry from ${i.name}${i.subject ? ` — ${i.subject}` : ""}`,
    time: i.createdAt?.toDate?.().toLocaleString?.() ?? "",
  }));

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-secondary ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-4 w-4 text-primary" />
                Website overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Public pages read from Firestore when data exists. Use <strong>Settings → Import defaults</strong> to
                seed content, then edit in each admin section.
              </p>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div className="flex items-center gap-3">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Published blog posts</span>
                </div>
                <span className="font-semibold">
                  {blogQ.data?.filter((p) => p.status === "published").length ?? 0}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Draft blog posts</span>
                </div>
                <span className="font-semibold">{blogQ.data?.filter((p) => p.status === "draft").length ?? 0}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Unread inquiries</span>
                </div>
                <span className="font-semibold">{unreadInquiries}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Latest inquiries</CardTitle>
            </CardHeader>
            <CardContent>
              {recentActivity.length === 0 ? (
                <p className="text-sm text-muted-foreground">No inquiries yet.</p>
              ) : (
                <div className="space-y-3">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-start gap-3 p-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
