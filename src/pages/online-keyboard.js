import * as React from "react"
import { Link } from "gatsby"
import { Table } from "react-bootstrap"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'



const ChangeLanguage = () => (
  <Layout>
  
    <h1>オンラインキーボードを使ってみよう</h1>
      <p>新しい言語を使えには、オンラインキーボードを使う方法もあります。</p>
      <Link to="https://keyboardingonline.net/kirundi-keyboard/ja/">オンラインキーボード</Link>

      <h2>1.言語を選択</h2>
      <h2>2.文字を入力</h2>

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)



export default ChangeLanguage
