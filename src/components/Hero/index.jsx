import "./index.scss"

export default function Hero({ heroContent }) {
  return (
    <div class="hero">
      <section class="hero-content">
        <h2 class="sr-only">{heroContent.title}</h2>
        {heroContent.desc.map((hero) => (
          <p class="subtitle">{hero.title}</p>
        ))}
        <p class="text">{heroContent.text}</p>
      </section>
    </div>
  )
}
