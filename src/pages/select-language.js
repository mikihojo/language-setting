import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SelectPage = () => (
  <Layout>
    <h1>言語の追加</h1>
    <h2>1.設定画面を開く</h2>
    <p>設定画面内に「時刻と言語」があります。そこをクリック。</p>
    <StaticImage
        src="../images/set.png"
        loading="eager"
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SelectPage
