import iconChat from "../../assets/img/icon-chat.png"
import iconMoney from "../../assets/img/icon-money.png"
import iconSecurity from "../../assets/img/icon-security.png"

const heroContent = {
  title: "Promoted Content",
  text: "Open a savings account with Argent Bank today!",
  desc: [
    { title: "No fees." },
    { title: "No minimum deposit." },
    { title: "High interest rates." },
  ],
}

const features = {
  title: "Features",
  desc: [
    {
      icon: iconChat,
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      icon: iconMoney,
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      icon: iconSecurity,
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ],
}

export default function Homepage() {
  return (
    <main>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">{heroContent.title}</h2>
          {heroContent.desc.map((hero) => (
            <p class="subtitle">{hero.title}</p>
          ))}
          <p class="text">{heroContent.text}</p>
        </section>
      </div>

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
    </main>
  )
}
