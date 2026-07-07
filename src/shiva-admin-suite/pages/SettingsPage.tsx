import { useEffect, useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";
import { toast } from "sonner";
import { useSaveSiteSettings, useSiteSettings } from "@/hooks/useCmsFirestore";
import type { SiteSettings } from "@/types/cms";

const SettingsPage = () => {
  const { data: settings, isPending } = useSiteSettings();
  const saveSettings = useSaveSiteSettings();
  const [form, setForm] = useState<SiteSettings | null>(null);

  useEffect(() => {
    if (settings) setForm(settings);
  }, [settings]);

  const handleSave = async () => {
    if (!form) return;
    try {
      await saveSettings.mutateAsync(form);
      toast.success("Settings saved — website will use these values.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    }
  };

  if (isPending || !form) {
    return (
      <AdminLayout title="Settings">
        <p className="text-sm text-muted-foreground">Loading…</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Settings">
      <div className="max-w-2xl space-y-6">


        <Card>
          <CardHeader>
            <CardTitle className="text-base">General</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="siteName">Site name</Label>
              <Input
                id="siteName"
                value={form.siteName}
                onChange={(e) => setForm((f) => (f ? { ...f, siteName: e.target.value } : f))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                value={form.tagline}
                onChange={(e) => setForm((f) => (f ? { ...f, tagline: e.target.value } : f))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                rows={3}
                value={form.description}
                onChange={(e) => setForm((f) => (f ? { ...f, description: e.target.value } : f))}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Contact & social</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={form.phone}
                onChange={(e) => setForm((f) => (f ? { ...f, phone: e.target.value } : f))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={form.email}
                onChange={(e) => setForm((f) => (f ? { ...f, email: e.target.value } : f))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={form.location}
                onChange={(e) => setForm((f) => (f ? { ...f, location: e.target.value } : f))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="youtube">YouTube</Label>
              <Input
                id="youtube"
                value={form.youtube}
                onChange={(e) => setForm((f) => (f ? { ...f, youtube: e.target.value } : f))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input
                id="instagram"
                value={form.instagram}
                onChange={(e) => setForm((f) => (f ? { ...f, instagram: e.target.value } : f))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook</Label>
              <Input
                id="facebook"
                value={form.facebook}
                onChange={(e) => setForm((f) => (f ? { ...f, facebook: e.target.value } : f))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twitter">X (Twitter)</Label>
              <Input
                id="twitter"
                value={form.twitter}
                onChange={(e) => setForm((f) => (f ? { ...f, twitter: e.target.value } : f))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                value={form.linkedin}
                onChange={(e) => setForm((f) => (f ? { ...f, linkedin: e.target.value } : f))}
              />
            </div>
          </CardContent>
        </Card>

        <Button className="gap-2" onClick={() => void handleSave()} disabled={saveSettings.isPending}>
          <Save className="h-4 w-4" />
          {saveSettings.isPending ? "Saving…" : "Save changes"}
        </Button>
      </div>
    </AdminLayout>
  );
};

export default SettingsPage;
