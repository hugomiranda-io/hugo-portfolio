export type ExternalLinkOptions = {
 rel?: string;
 target?: string;
 externalLink?: boolean;
};

export function mergeExternalRel(rel = ""): string {
 const tokens = new Set((rel ?? "").split(/\s+/).filter(Boolean));
 tokens.add("noopener");
 tokens.add("noreferrer");
 return Array.from(tokens).join(" ");
}

export function resolveExternalLinkAttributes({ externalLink = false, rel, target }: ExternalLinkOptions) {
 if (!externalLink) {
  return { rel, target };
 }

 return {
  rel: mergeExternalRel(rel),
  target: target ?? "_blank",
 };
}
