import iconChat from "../../assets/img/icon-chat.png"
import iconMoney from "../../assets/img/icon-money.png"
import iconSecurity from "../../assets/img/icon-security.png"
import Hero from "../../components/Hero"
import Features from "../../components/Features"

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
      <Hero heroContent={heroContent} />
      <Features features={features} />
    </main>
  )
}
