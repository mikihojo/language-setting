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
          style={{ marginBottom: `var(--space-6)` }}
        />
      <h2>2.言語の項目を選択</h2>
        <p>左側メニューに「言語」の項目があります。そこをクリック。</p>
        <StaticImage
          src="../images/time_and_language.png"
          loading="eager"
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-6)` }}
        />
      <h2>3.言語の追加を選択</h2>
        <p>「言語の追加」クリックして必要な言語を追加します。</p>
        <StaticImage
          src="../images/add_language.png"
          loading="eager"
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-6)` }}
        />
      <h2>4.インストールする言語を選択</h2>
        <p>インストールする言語を選択して、「次へ」をクリック。</p>
        <StaticImage
          src="../images/install_language.png"
          loading="eager"
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-6)` }}
        />
    <div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SelectPage
