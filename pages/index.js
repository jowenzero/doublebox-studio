import Layout from "../components/Layout";
import {
  Grid,
} from "@material-ui/core";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <Layout>
        <NextSeo title="Home" />

        <Grid container spacing={2} style={{marginTop: 80, marginBottom: 70}}>
          <Grid item xs={6}>
            <p className="title-head">Welcome to</p>

            <h1 className="title">
              <a href="https://nextjs.org">Next.js</a> with DoubleBox Studio
            </h1>

            <p className="description">
              Get started by editing <code>pages/index.js</code> then save and
              publish again
            </p>
          </Grid>
          <Grid item xs={6}>
            <div className="logo-head">
              <img src="/next-white.svg" alt="Next Logo" className="logo" />
              <img src="/cross.svg" alt="Cross" className="cross" />
              <img src="/icons/doublebox-logo.svg" alt="DoubleBox Studio Logo" className="logo" />
            </div>
          </Grid>
        </Grid>

        <style jsx>{`
          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title-head {
            font-size: 2rem;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: left;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
            max-width: 584px;
            padding: 10px;
          }

          code {
            background: #050505;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .logo-head {
            display: flex;
            flex-direction: column;
            padding: 20px;
            align-items: center;
          }

          .logo {
            height: 120px;
          }

          .cross {
            width: 20px;
            height: 20px;
            margin-top: 30px;
            margin-bottom: 30px;
          }
        `}</style>
      </Layout>
    </>
  );
}
