import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// Set the document title
document.title = "Olha Tkachiv Portfolio"

// Set meta description
const metaDescription = document.querySelector('meta[name="description"]')
if (metaDescription) {
  metaDescription.setAttribute(
    "content",
    "Portfolio of Olha Tkachiv - Passionate Front-End Developer and Project Manager specializing in React, JavaScript, and responsive web design. Based in Copenhagen, Denmark.",
  )
} else {
  const meta = document.createElement("meta")
  meta.name = "description"
  meta.content =
    "Portfolio of Olha Tkachiv - Passionate Front-End Developer and Project Manager specializing in React, JavaScript, and responsive web design. Based in Copenhagen, Denmark."
  document.getElementsByTagName("head")[0].appendChild(meta)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
