import Accounts from "../../components/Accounts"
import { useState } from "react"

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
  const [isEdit, setEdit] = useState(false)
  const [firstName, setFirstName] = useState("Tony")
  const [lastName, setLastName] = useState("Jarvis")

  const fNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const LNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleCancel = () => {
    setFirstName("Tony")
    setLastName("Jarvis")
    setEdit(false)
  }
  return (
    <main className="main bg-dark">
      <div className="header">
        {isEdit ? (
          <>
            <h1>
              Welcome back
              <br />
              <input
                onChange={fNameChange}
                className="save"
                label="firstName"
                type="text"
                placeholder={firstName}
              />
              <input
                onChange={LNameChange}
                className="save"
                label="lastName"
                type="text"
                placeholder={lastName}
              />
            </h1>

            <button type="reset" onClick={handleCancel} className="button">
              Cancel
            </button>

            <button onClick={() => setEdit(!isEdit)} className="button">
              Save
            </button>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {firstName} {lastName} !
            </h1>
            <button onClick={() => setEdit(!isEdit)} className="button">
              Edit Name
            </button>
          </>
        )}
      </div>

      <Accounts accounts={accounts} />
    </main>
  )
}
