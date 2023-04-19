import "./index.scss"
import { Link } from "react-router-dom"

export default function Accounts({ accounts }) {
  return (
    <>
      <h2 className="sr-only">{accounts.title}</h2>
      {accounts.desc.map((account, index) => (
        <section className="account" key={index}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">
              {account.amountDescription}
            </p>
          </div>
          <div className="account-content-wrapper cta">
            <Link to="./transactions">
              <button className="button big">View transactions</button>
            </Link>
          </div>
        </section>
      ))}
    </>
  )
}
