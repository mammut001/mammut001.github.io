export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
        {updated && <p className="mt-2 text-sm text-muted">{updated}</p>}
        <div className="mt-8 space-y-8">{children}</div>
      </div>
    </article>
  );
}
