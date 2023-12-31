import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "1.言語の追加",
    url: "select-language",
    description:
      "Windowsで言語の追加をやってみましょう！",
  },
  {
    text: "2.言語の変更方法",
    url: "change-language",
    description:
      "日本語から追加した言語に変更してみよう！",
  },  
  {
    text: "3.キーボードの配置を確認する",
    url: "",
    description:
      "Windowsのキーボードとオンラインキーボード",
  },
  {
    text: "4.Word,Excelで入力してみる",
    url: "",
    description:
      "Word,Excelで入力してみて正しく表示されるか確認する",
  },
  {
    text: "補足1.各言語とフォントの対応表",
    url: "language-font",
    description:
      "Word,Excelで表示可能なフォントを各言語ごとにまとめています。"
  },
  {
    text: "補足2.それでも入力できない文字がある場合",
    url: "language-code",
    description:
      "文字コードを使用して入力しましょう。"
  },
  {
    text: "補足3.オンラインキーボードを使ってみよう",
    url: "online-keyboard",
    description:
      "オンラインキーボードを使えば即座に他言語入力が可能"
  },  

]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "言語の追加", url: "select-language" },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/note-alphabet.png"
        loading="eager"
        placeholder="blurred"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Windowsで言語の設定
      </h1>
      <p className={styles.intro}>
        Windowsで言語の追加から表示までを順を追って設定してみましょう。
        {/*samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))*/}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text}
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
