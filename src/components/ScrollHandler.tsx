"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scrolls to #contact when the URL includes ?scrollTo=contact (e.g. after inquiry links).
 * Uses window.location instead of useSearchParams to avoid needing a Suspense boundary
 * and hydration mismatches when nested under streamed RSC output.
 */
export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo !== "contact") return;

    const timer = window.setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (!contactSection) return;

      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      const url = new URL(window.location.href);
      url.searchParams.delete("scrollTo");
      window.history.replaceState({}, "", url.toString());
    }, 500);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
