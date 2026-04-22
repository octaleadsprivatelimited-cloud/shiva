import { useAuth } from "@/contexts/AuthProvider";
import { isFirebaseConfigured } from "@/lib/firebase";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

export function RequireAdmin() {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (!isFirebaseConfigured()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="max-w-md text-center space-y-4 rounded-xl border bg-card p-8 shadow-sm">
          <h1 className="text-lg font-semibold">Admin panel unavailable</h1>
          <p className="text-sm text-muted-foreground">
            Firebase environment variables are missing. In Vercel open{" "}
            <strong>Project → Settings → Environment Variables</strong> and add every{" "}
            <code className="text-xs bg-muted px-1 rounded">VITE_FIREBASE_*</code> key from{" "}
            <code className="text-xs bg-muted px-1 rounded">.env.example</code>. Apply to{" "}
            <strong>Production</strong>, then redeploy.
          </p>
          <Link to="/" className="text-primary text-sm font-medium underline underline-offset-2">
            Back to website
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground text-sm">
        Loading…
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
