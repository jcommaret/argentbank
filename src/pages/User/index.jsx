import { Link } from "react-router-dom"

const accounts = {
  title: "Accounts",
  desc: [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      amountDescription: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      amountDescription: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      amountDescription: "Current Balance",
    },
  ],
}

export default function User() {
  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <Link to="edit">
          <button class="edit-button">Edit Name</button>
        </Link>
      </div>

      <h2 class="sr-only">{accounts.title}</h2>
      {accounts.desc.map((account) => (
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">
              {account.amountDescription}
            </p>
          </div>
          <div className="account-content-wrapper cta">
            <Link to="transactions">
              <button className="transaction-button">View transactions</button>
            </Link>
          </div>
        </section>
      ))}
    </main>
  )
}
