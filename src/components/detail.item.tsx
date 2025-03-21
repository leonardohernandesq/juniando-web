export default function DetailItem({
  title,
  content,
}: {
  title: string | null;
  content: string | null;
}) {
  return (
    <p>
      <span className="text-sm font-bold">{title}: </span>
      {content}
    </p>
  );
}
