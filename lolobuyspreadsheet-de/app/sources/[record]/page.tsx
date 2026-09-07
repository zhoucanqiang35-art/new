import { notFound } from "next/navigation";
import SourceRecordPage, { isRecord } from "../../components/SourceRecordPage";

export default async function Page({ params }: { params: Promise<{ record: string }> }) {
  const { record } = await params;
  if (!isRecord(record)) notFound();
  return <SourceRecordPage locale="en" record={record} />;
}
