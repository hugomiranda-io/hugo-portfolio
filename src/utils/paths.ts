export function normalizePathname(pathname?: string) {
 if (!pathname) return "/";

 let path = pathname.split(/[?#]/, 1)[0] ?? "/";

 const baseUrl = import.meta.env.BASE_URL ?? "/";
 const baseNoTrailingSlash = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
 if (
  baseNoTrailingSlash &&
  baseNoTrailingSlash !== "/" &&
  path.startsWith(`${baseNoTrailingSlash}/`)
 ) {
  path = path.slice(baseNoTrailingSlash.length);
 }

 if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
 return path || "/";
}
