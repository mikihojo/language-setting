import * as React from "react"
import { Link } from "gatsby"
import { Table } from "react-bootstrap"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'



const ChangeLanguage = () => (
  <Layout>
  
    <h1>言語の変更方法</h1>
      <p>Welcome to page 2</p>

      <h2>1.タスクバーから変更</h2>
      <h2>2.ショートカットで変更</h2>

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)



export default ChangeLanguage
