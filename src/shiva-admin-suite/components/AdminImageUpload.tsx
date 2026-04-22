import { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { compressImageFileToDataUrl, MAX_IMAGE_DATA_URL_CHARS } from "@/lib/imageCompress";

type AdminImageUploadProps = {
  label: string;
  value: string;
  onChange: (dataUrlOrExisting: string) => void;
  onClear?: () => void;
  disabled?: boolean;
  helperText?: string;
};

export function AdminImageUpload({
  label,
  value,
  onChange,
  onClear,
  disabled,
  helperText,
}: AdminImageUploadProps) {
  const inputId = useId();
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setBusy(true);
    try {
      const dataUrl = await compressImageFileToDataUrl(file);
      if (dataUrl.length > MAX_IMAGE_DATA_URL_CHARS) {
        throw new Error("Compressed image is still too large. Try a smaller original file.");
      }
      onChange(dataUrl);
      toast.success("Image compressed and attached.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not process image.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={inputId}>{label}</Label>
      {value ? (
        <div className="rounded-md border bg-muted overflow-hidden max-h-52 flex items-center justify-center">
          <img src={value} alt="" className="max-h-52 w-full object-contain" />
        </div>
      ) : (
        <p className="text-xs text-muted-foreground border border-dashed rounded-md p-4 text-center">No image yet</p>
      )}
      <div className="flex flex-wrap gap-2 items-center">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          disabled={disabled || busy}
          onClick={() => fileRef.current?.click()}
        >
          {busy ? "Compressing…" : value ? "Replace image" : "Upload image"}
        </Button>
        {value && onClear ? (
          <Button type="button" variant="ghost" size="sm" disabled={disabled || busy} onClick={onClear}>
            Remove
          </Button>
        ) : null}
        <input
          ref={fileRef}
          id={inputId}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => void handleFile(e)}
        />
      </div>
      <p className="text-xs text-muted-foreground">
        {helperText ??
          "Images are resized and saved as compressed JPEG in Firestore (no separate storage). Existing HTTPS URLs from imports still work until you replace them."}
      </p>
    </div>
  );
}
