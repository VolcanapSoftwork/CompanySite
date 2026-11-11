import { WorkDetailPage, workMetadata, workStaticParams, type WorkParams } from "../../../components/WorkDetail";

export const generateStaticParams = workStaticParams;

export function generateMetadata(props: WorkParams) {
  return workMetadata("th", props);
}

export default function Page(props: WorkParams) {
  return <WorkDetailPage lang="th" {...props} />;
}
