import { RootDocument, rootMetadata, rootViewport } from "../components/RootDocument";

export const metadata = rootMetadata("th");
export const viewport = rootViewport;

export default function ThaiLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="th">{children}</RootDocument>;
}
