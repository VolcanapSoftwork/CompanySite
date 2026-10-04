import type { Metadata } from "next";

// Concept mockups shown as portfolio examples; not real systems, so keep them out of search results
export const metadata: Metadata = {
  robots: { index: false, follow: false }
};

export default function MockupsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
