import * as React from "react"
import { Link } from "gatsby"
import { Table } from "react-bootstrap"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'



const LanguageFont = () => (
  <Layout>
    <h1>各言語とフォントの対応</h1>
      <p>Welcome to page 2</p>
      <Table bordered hover>
        <thead>
          <th>言語</th>
          <th>フォント</th>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2}>クメール語</td>
            <td>Leelawadee UI</td>
          </tr>
          <tr>
            <td>Linux Biolinum G</td>
          </tr>
        </tbody>
      </Table>
    <Link to="/">Go back to the homepage</Link>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
  </Layout>
)



export default LanguageFont