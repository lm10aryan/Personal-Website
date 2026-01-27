export default function RetroButton({
  children,
  href,
  color = "orange",
  className = "",
  download = false
}) {
  const colorMap = {
    orange: 'var(--peach-orange)',
    green: 'var(--sage-green)',
    teal: 'var(--soft-teal)',
    pink: 'var(--dusty-pink)',
    purple: 'var(--retro-purple)'
  };

  return (
    <a
      href={href}
      className={`retro-button ${className}`}
      style={{ background: colorMap[color] }}
      download={download ? "" : undefined}
    >
      {children}
    </a>
  );
}
