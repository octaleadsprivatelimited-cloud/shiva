/** Firestore documents must stay under ~1 MiB; keep image payload conservative. */
export const MAX_IMAGE_DATA_URL_CHARS = 580_000;

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result as string);
    fr.onerror = () => reject(new Error("Could not read compressed image."));
    fr.readAsDataURL(blob);
  });
}

function canvasToJpegBlob(canvas: HTMLCanvasElement, quality: number): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob((b) => resolve(b), "image/jpeg", quality);
  });
}

/**
 * Resize and re-encode as JPEG until the data URL is small enough for Firestore.
 * Accepts common raster formats from file input (PNG/JPEG/WebP/GIF).
 */
export async function compressImageFileToDataUrl(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) {
    throw new Error("Please choose an image file.");
  }

  const bitmap = await createImageBitmap(file).catch(() => {
    throw new Error("Could not read this image. Try JPEG or PNG.");
  });

  try {
    let maxEdge = 1280;
    const minEdge = 360;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas is not available in this browser.");

    for (let outer = 0; outer < 24; outer++) {
      const scale = maxEdge / Math.max(bitmap.width, bitmap.height, 1);
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      canvas.width = w;
      canvas.height = h;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(bitmap, 0, 0, w, h);

      let q = 0.82;
      for (let step = 0; step < 18; step++) {
        const blob = await canvasToJpegBlob(canvas, q);
        if (!blob) {
          q -= 0.06;
          continue;
        }
        const dataUrl = await blobToDataUrl(blob);
        if (dataUrl.length <= MAX_IMAGE_DATA_URL_CHARS) {
          return dataUrl;
        }
        q -= 0.06;
        if (q < 0.32) break;
      }

      if (maxEdge <= minEdge) {
        throw new Error(
          "Image is still too large after compression. Use a smaller photo or crop it before uploading.",
        );
      }
      maxEdge = Math.round(maxEdge * 0.85);
    }

    throw new Error("Could not compress image to a safe size.");
  } finally {
    bitmap.close();
  }
}
