import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Examples</h1>

        <p className="description">
          Looking through 2 examples of our program in action.
        </p>
        <div>
          <h3>Example 1: Using Ben Simmons 1st 2 Seasons As Input</h3>
          <Image height={350} width={700} src="/simmons.png" />
          <div>
            Hey, our model works. Given Simmons data, we are able to get a
            projection of Simmons career and some career stats. Our model
            couldn't account for a sore back injury that lasted 2 years, but it
            does pretty well to know that Ben Simmons is the closest comparison
            and gives an accurate comparison against other NBA players.
          </div>
        </div>

        <div>
          <h3>Example 2: Looking at the past with Wade's 1st 2 Seasons</h3>
          <Image height={350} width={700} src="/wade.png" />
          <div>
            With Dwyane Wade, our model still fares pretty well. We're able to
            say that Dwayne Wade is the closest current player (as of 2018) and
            his predicted stats don't line up that far away from the stats that
            he achieves in his career, although our predictions are not exact.
            Furthermore, the honorable mentions of Chris Paul and Vince Carter
            aren't bad, as they are also guards who have had long and successful
            careers in the NBA. Against the scatterplot renders in a way where
            users can compare their potential player against the rest of the
            league.
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://www.cs.tufts.edu/comp/152SAN/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/mmonro02.png" alt="mmonro" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
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

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
