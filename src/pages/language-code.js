import * as React from "react"
import { Link } from "gatsby"
import { Table } from "react-bootstrap"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'



const ChangeLanguage = () => (
  <Layout>
  
    <h1>文字コードで入力</h1>
      <p>キーボードから入力出来ない場合は文字コードを使用して入力しよう。</p>

      <h2>1.文字コードを確認</h2>
      <h2>2.文字コードを入力</h2>

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)



export default ChangeLanguage
