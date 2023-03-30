import "./index.scss"

export default function Features({ features }) {
  return (
    <section class="features">
      <h2 class="sr-only">{features.title}</h2>
      {features.desc.map((feature) => (
        <div class="feature-item">
          <img src={feature.icon} alt="Chat Icon" class="feature-icon" />
          <h3 class="feature-item-title">{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </section>
  )
}
