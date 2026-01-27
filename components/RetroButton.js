export default function RetroButton({
  children,
  href,
  color = "orange",
  className = ""
}) {
  const colorMap = {
    orange: 'var(--peach-orange)',
    green: 'var(--sage-green)',
    teal: 'var(--soft-teal)',
    pink: 'var(--dusty-pink)'
  };

  return (
    <a
      href={href}
      className={`retro-button ${className}`}
      style={{ background: colorMap[color] }}
    >
      {children}
    </a>
  );
}
