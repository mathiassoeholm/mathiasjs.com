/** @jsx jsx */
import { jsx } from "theme-ui"

export const Subscribe = () => {
  const onSubmit = () => {
    window.open("https://buttondown.email/soeholm", "popupwindow")
  }

  return (
    <div
      sx={{
        backgroundColor: "subscribeBackground",
        color: "subscribeText",
        display: "flex",
        flexDirection: "column",
        padding: 2,
        borderRadius: 10,
        alignItems: "center",
        maxWidth: 350,
        margin: "auto",
      }}
    >
      <h3
        sx={{
          margin: 1,
          fontFamily: "heading",
        }}
      >
        Get new blog posts by email
      </h3>
      <form
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridGap: 1,
          width: "100%",
          fontFamily: "heading",
        }}
        action="https://buttondown.email/api/emails/embed-subscribe/soeholm"
        method="post"
        target="popupwindow"
        onSubmit={onSubmit}
      >
        <label htmlFor="bd-email">Email</label>
        <input
          sx={{
            fontSize: 2,
            border: "none",
            padding: 1,
            borderRadius: 4,
            fontFamily: "heading",
          }}
          type="email"
          name="email"
          id="bd-email"
          placeholder="alice@mail.com"
        />
        <input type="hidden" value="1" name="embed" />
        <input
          sx={{
            fontSize: 2,
            borderRadius: 4,
            backgroundColor: "subscribeButton",
            color: "subscribeText",
            border: "none",
            fontFamily: "heading",
            padding: 1,
            marginTop: 1,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "subscribeButtonHover",
            },
          }}
          type="submit"
          value="Subscribe"
        />
      </form>
    </div>
  )
}
