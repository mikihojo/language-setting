import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SelectLanguage = () => (
  <Layout>
    <h1>Windows 言語の追加</h1>
    <p>Welcome to page Select Language</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Select language" />

export default SelectLanguage
