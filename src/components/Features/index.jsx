import "./index.scss"

export default function Features({ features }) {
  return (
    <section className="features">
      <h2 className="sr-only">{features.title}</h2>
      {features.desc.map((feature) => (
        <div className="feature-item">
          <img src={feature.icon} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </section>
  )
}
