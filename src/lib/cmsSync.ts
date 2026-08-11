const CMS_CHANNEL = "shiva-cms-updates";

export function broadcastCmsChange(): void {
  if (typeof window === "undefined" || !("BroadcastChannel" in window)) return;
  const channel = new BroadcastChannel(CMS_CHANNEL);
  channel.postMessage({ type: "cms-changed", at: Date.now() });
  channel.close();
}

export function listenForCmsChanges(onChange: () => void): () => void {
  if (typeof window === "undefined" || !("BroadcastChannel" in window)) return () => undefined;
  const channel = new BroadcastChannel(CMS_CHANNEL);
  channel.addEventListener("message", onChange);
  return () => channel.close();
}
