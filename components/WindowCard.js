export default function WindowCard({
  title = "WINDOW.exe",
  children,
  colorDot = "orange",
  rotate = 0,
  className = "",
  style = {}
}) {
  return (
    <div
      className={`window-card ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      <div className="window-chrome">
        <div className="window-dots">
          <span className="dot dot-orange"></span>
          <span className="dot dot-green"></span>
          <span className="dot dot-teal"></span>
        </div>
        <span className="window-title">{title}</span>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
}
