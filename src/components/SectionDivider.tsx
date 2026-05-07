export function SectionDivider() {
  return (
    <div aria-hidden className="bg-paper py-3 lg:py-5">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-10 flex items-center gap-5">
        <span className="flex-1 h-px bg-line" />
        <span className="flex items-center gap-3 text-gold-deep">
          <span className="text-[0.5rem] opacity-70">◆</span>
          <span className="text-[0.65rem]">◆</span>
          <span className="text-[0.5rem] opacity-70">◆</span>
        </span>
        <span className="flex-1 h-px bg-line" />
      </div>
    </div>
  );
}
