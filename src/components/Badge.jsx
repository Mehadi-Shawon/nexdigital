export default function Badge({ children }) {
  return (
    <div className="nb-badge">
      <span className="nb-badge-dot" />
      {children}
    </div>
  )
}
