import "./index.scss"

export default function Hero({ heroContent }) {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">{heroContent.title}</h2>
        {heroContent.desc.map((hero, index) => (
          <p className="subtitle" key={index}>
            {hero.title}
          </p>
        ))}
        <p className="text">{heroContent.text}</p>
      </section>
    </div>
  )
}
