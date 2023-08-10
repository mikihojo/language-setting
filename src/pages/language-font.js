import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const LanguageFont = () => (
  <Layout>
    <h1>各言語とフォントの対応</h1>
      <p>Welcome to page 2</p>
      <table>
        <tr>
          <td rowspan=”2″>クメール語</td>
          <td>Leelawadee UI</td>
        </tr>
        <tr>
          <td>Linux Biolinum G</td>
        </tr>
      </table>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)



export default LanguageFont
