import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Documentation
        </h1>

        <p className="description">
          The most accurate Player Prediction ML Model you can use.
        </p>


        <div className="section">
          Data Collection
        </div>

        <div className="doc">
          Most of the data used in our model was acquired from a dataset that 
          was originally scraped from basketball-reference.com then given to us 
          for use in a previous project.  Additionally, we scraped other 
          attributes like ‘draft pick’ and ‘rookie age’ from the site ourselves 
          and added them to the dataset.  There were also some elements that were
          added manually, such as missing player IDs.  Once all the data was 
          collected where each row represented a player’s performance for a 
          given year, we then reformatted the data such that each row represented 
          a player’s entire career, with information on career length, first two 
          seasons stats, and career totals.
        </div>


        <div className="section">
          Data Preprocessing
        </div>


        <div className="doc">
          To account for missing draft pick data for players who went undrafted,
          we used the K-nearest-neighbors imputer from sklearn to input missing 
          draft pick data. We did this instead of eliminating those data points 
          because players go undrafted for a reason, not at random. 
        </div>
	
        <div className="section">
          Regression Models
        </div>

        <div className="doc">
          In order to predict player statistics, we both varied hyperparameters 
          using grid search and tested various regression models.
        </div>

        <div className="doc">
          <ol>
            <li> 
              <div>Models Tested</div>
              <div>We experimented using sklearn’s Linear Regression, Ridge &
                  Lasso Regression, and the linear support vector machine 
                  regression. Using root mean squared error as our testing 
                  metric, we found that either ridge regression or the SVM 
                  were the most accurate depending on the statistic being 
                  predicted.</div>
            </li>

            <li>
              
            </li>
          </ol>

        </div>


      </main>

      <footer>
        <a
          href="https://www.cs.tufts.edu/comp/152SAN/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/mmonro02.png" alt="mmonro" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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

        .title,
        .description {
          text-align: center;
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

        .section {
          display: flex;
          align-items: left;
          padding: 0.75rem;
          margin-top: 1rem;
          font-weight: bold;
          font-size: 1.2rem;
        }


        .doc {
          display: flex;
          align-items: left;
          padding: 0.75rem;
          max-width: 800px;
          font-size: 1.1rem;
          font-family: Arial;
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
  )
}
