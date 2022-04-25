import Head from "next/head";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="split left">
          <h1 className="title">Create Your Player</h1>

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
                  </label>{" "}
                  <br />
                  <label>
                    Age:
                    <input type="number" name="age" />
                  </label>{" "}
                  <br />
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
                  </label>{" "}
                  <br />
                  <label>
                    VORP
                    <input type="text" name="VORP" />
                  </label>{" "}
                  <br />
                  <label>
                    ATK Rating
                    <input type="text" name="ATKRating" />
                  </label>{" "}
                  <br />
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
                  </label>{" "}
                  <br />
                  <label>
                    VORP
                    <input type="text" name="VORP" />
                  </label>{" "}
                  <br />
                  <label>
                    ATK Rating
                    <input type="text" name="ATKRating" />
                  </label>{" "}
                  <br />
                  <label>
                    DEF Rating
                    <input type="text" name="DEFRating" />
                  </label>
                </form>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Button variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
        </div>

        <div className="split right">
          <h1 className="title">Our Model Says ...</h1>

          {loading && <CircularProgress />}
          {submitted && <h2> Prediction: Bust</h2>}
          {submitted && (
            <>
              <h3> Career Stats </h3>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Season</TableCell>
                    <TableCell align="right">Games Played</TableCell>
                    <TableCell align="right">VORP</TableCell>
                    <TableCell align="right">ATK Rating</TableCell>
                    <TableCell align="right">DEF Rating</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="right">2019-2020</TableCell>
                    <TableCell align="right">Games Played</TableCell>
                    <TableCell align="right">VORP</TableCell>
                    <TableCell align="right">ATK Rating</TableCell>
                    <TableCell align="right">DEF Rating</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {/* split into two columns of equal width and height */}
              <div className="row">
                <div className="col colleft">
                  <h3> Closest Player Comparison</h3>
                  {/* put image side by side to text about player */}
                  <div className="playercomprow">
                    <div className="playercompcol">
                      <img
                        src="https://nba-players.herokuapp.com/players/curry/stephen"
                        alt="DAL"
                        className="playercompimg"
                      />
                    </div>
                    <div className="playercompcol">
                      <h4> text </h4>
                    </div>
                  </div>
                </div>
                <div className="col"> hello </div>
              </div>
            </>
          )}
          {!submitted && <p> you have not submitted yet </p>}
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
        .split {
          height: 100%;
          width: 100%;
          position: fixed;
          z-index: 1;
          top: 0;
          overflow-x: hidden;
          padding-top: 20px;
        }

        .row {
          padding-top: 35px;
          display: flex;
        }

        .col {
          flex: 50%;
        }

        .playercompcol {
          display: inline;
        }

        .colleft {
          border-right: 1px solid #eaeaea;
        }

        .left {
          width: 40%;
          left: 0;
          border-right: 1px solid #eaeaea;
          padding-right: 25px;
        }

        .right {
          width: 60%;
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

        .playercompimg {
          width: 100px;
          height: 100px;
          object-fit: cover;
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
          height: 25px;
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
  );
}
