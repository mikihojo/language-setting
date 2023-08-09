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
      <h2>2.言語の項目を選択</h2>
        <p>左側メニューに「言語」の項目があります。そこをクリック。</p>
        <StaticImage
          src="../images/time_and_language.png"
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
