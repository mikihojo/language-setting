import * as React from "react"
import { Link } from "gatsby"
import { Table } from "react-bootstrap"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'



const LanguageFont = () => (
  <Layout>
  
    <h1>各言語とフォントの対応</h1>
      <p>Welcome to page 2</p>
      <Table bordered>
        <thead>
          <th>言語</th>
          <th>フォント</th>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={5}>クメール語</td>
            <td>Leelawadee UI</td>
          </tr>
          <tr>
            <td>Linux Biolinum G</td>
          </tr>
          <tr>
            <td>Gentium Basic</td>
          </tr>
            <tr>
            <td>Mangal</td>
          </tr>
            <tr>
            <td>Microsoft YaHei</td>
          </tr>
        </tbody>
      </Table>
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)



export default LanguageFont
