import Head from 'next/head'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="split left">
        
        <h1 className="title">
          Create Your Player
        </h1>

        <p className="description">
          The most accurate Player Prediction ML Model you can use.
        </p>

        
        <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography>Player Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              
              <form>
                <label>
                  Name: 
                  <input type="text" name="name" />
                </label> <br/>
                
                <label>
                  Age:    
                  <input type="number" name="age" />
                </label> <br/>
                
                <label>
                  Height: 
                  <input type="text" name="ft" /> ft.
                  <input type="text" name="in" /> in.
                </label>
                
                
              </form>
              
              </Typography>
            </AccordionDetails>
        </Accordion>
      
      
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Season 1 Stats</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <form>
                <label>
                  Games Played
                  <input type="text" name="gamesPlayed" />
                </label> <br/>
                
                <label>
                  VORP 
                  <input type="text" name="VORP" />
                </label> <br/>
                
                <label>
                  ATK Rating    
                  <input type="text" name="ATKRating" />
                </label> <br/>
                
                <label>
                  DEF Rating
                  <input type="text" name="DEFRating" />
                </label>
                
                
                
                
              </form>
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Season 2 Stats</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <form>
                <label>
                  Games Played
                  <input type="text" name="gamesPlayed" />
                </label> <br/>
                
                <label>
                  VORP 
                  <input type="text" name="VORP" />
                </label> <br/>
                
                <label>
                  ATK Rating    
                  <input type="text" name="ATKRating" />
                </label> <br/>
                
                <label>
                  DEF Rating
                  <input type="text" name="DEFRating" />
                </label>

              </form>
            </Typography>
          </AccordionDetails>
        </Accordion>
        
      
      </div>
      
      
      
      <div className="split right">
        <h1 className="title">
          Prediction
        </h1>
        
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
        
        

        .split {
          height: 100%;
          width: 50%;
          position: fixed;
          z-index: 1;
          top: 0;
          overflow-x: hidden;
          padding-top: 20px;
        }

        
        .left {
          left: 0;
          
        }

        
        .right {
          right: 0;
          
        }
        
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