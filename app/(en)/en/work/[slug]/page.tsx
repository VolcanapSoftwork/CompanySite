import { WorkDetailPage, workMetadata, workStaticParams, type WorkParams } from "../../../../components/WorkDetail";

export const generateStaticParams = workStaticParams;

export function generateMetadata(props: WorkParams) {
  return workMetadata("en", props);
}

export default function Page(props: WorkParams) {
  return <WorkDetailPage lang="en" {...props} />;
}
