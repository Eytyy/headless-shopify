import React, { useState } from "react"
import { decode } from "shopify-gid"

const Waitlist = ({ accountId, message, buttonText, variantId }) => {
  const [success, setSuccess] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.currentTarget
    const { email } = form.elements
    const productIdDecoded = decode(variantId).id
    fetch("/.netlify/functions/back-in-stock", {
      method: "POST",
      body: JSON.stringify({
        accountId,
        email: email.value,
        variant: productIdDecoded,
        platform: "shopify",
      }),
    }).then(() => {
      setSuccess(true)
    })
  }
  return (
    <>
      {!success ? (
        <form onSubmit={e => handleSubmit(e)}>
          <input
            name="email"
            placeholder="Email"
            type="email"
            required={true}
          />
          <button type="submit">
            <span>{buttonText}</span>
          </button>
        </form>
      ) : (
        <div>
          <p>{message}</p>
        </div>
      )}
    </>
  )
}

export default Waitlist
