export default function SectionKicker({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-ink">
      {children}
    </h2>
  );
}
