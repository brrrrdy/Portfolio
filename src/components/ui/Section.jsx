function Section({ title, className = "", children }) {
  const sectionClassName = ["content-section", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={sectionClassName}>
      <div className="section-container">
        <h2>{title}</h2>
        <div className="section-content-wrapper">{children}</div>
      </div>
    </div>
  );
}

export default Section;
