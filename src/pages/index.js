import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Develop</h3>
          <p>UX designer & developer in Manchester</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} /> */}
        {/* <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="site banner"
        /> */}
        <StaticImage src="../images/banner.png" alt="hero banner" />
      </section>
    </Layout>
  )
}
