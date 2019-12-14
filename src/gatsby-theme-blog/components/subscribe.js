import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export const Subscribe = () => {
  const [email, setEmail] = useState("")

  const onSubmit = () => {
    window.open("https://buttondown.email/soeholm", "popupwindow")
  }

  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/soeholm"
      method="post"
      target="popupwindow"
      onsubmit={onSubmit}
      class="embeddable-buttondown-form"
    >
      <label for="bd-email">Enter your email</label>
      <input type="email" name="email" id="bd-email" />
      <input type="hidden" value="1" name="embed" />
      <input type="submit" value="Subscribe" />
    </form>
  )
}
