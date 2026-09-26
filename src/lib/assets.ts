/**
 * Obliq Brand Asset Helper
 *
 * Resolves images, logos, and screenshots from the centralized
 * OBLIQ-in/brand-assets repository.
 *
 * @example
 * ```tsx
 * import Image from "next/image";
 * import { getBrandAssetUrl } from "@/lib/assets";
 *
 * <Image
 *   src={getBrandAssetUrl("screenshots/dashboard.png")}
 *   alt="Obliq dashboard"
 *   width={1200}
 *   height={700}
 * />
 * ```
 */

export const BRAND_ASSETS_BASE_URL =
  "https://raw.githubusercontent.com/OBLIQ-in/brand-assets/main";

export const BRAND_ASSETS_CDN_URL =
  "https://cdn.jsdelivr.net/gh/OBLIQ-in/brand-assets@main";

/**
 * Returns the fully qualified URL for an asset hosted in OBLIQ-in/brand-assets.
 *
 * @param path - Relative path within the brand-assets repo (e.g. "logos/obliq-icon.svg", "screenshots/hero-dashboard.png")
 * @param useCdn - Whether to use the edge-cached jsDelivr CDN instead of raw GitHub (default: false for instant propagation)
 */
export function getBrandAssetUrl(path: string, useCdn: boolean = false): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const baseUrl = useCdn ? BRAND_ASSETS_CDN_URL : BRAND_ASSETS_BASE_URL;
  return `${baseUrl}/${cleanPath}`;
}
