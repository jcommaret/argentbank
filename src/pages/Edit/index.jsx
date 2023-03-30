import Accounts from "../../components/Accounts"

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

export default function Edit() {
  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button class="save-button">Save</button>
        <button class="cancel-button">Cancel</button>
      </div>

      <Accounts accounts={accounts} />
    </main>
  )
}
