export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-mark" aria-label="Khaan Burger × Poké">
      {/* Remplacer par /public/images/logo-main.svg ou .png dès réception du logo final détouré. */}
      <span className="brand-khaan">khaan</span>
      {!compact && <span className="brand-sub">Burger × Poké</span>}
    </div>
  );
}
