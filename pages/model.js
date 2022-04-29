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
import Chip from "@mui/material/Chip";
import Scatterplot from "../components/scatterplot";

export default function Home() {
  const [submitted, setSubmitted] = useState(true);
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
                    Draft Pick:
                    <input type="number" name="draftPick" />
                  </label>{" "} 
                  <br />
                  <label>
                    Rookie age: 
                    <input type="number" name="rookieAge" />
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
                    Guard
                    <input type="number" name="guard1" />
                  </label>{" "}
                  <br />
                  <label>
                    Forward
                    <input type="number" name="forward1" />
                  </label>{" "}
                  <br />
                  <label>
                    Center
                    <input type="number" name="center1" />
                  </label>{" "}
                  <br />
                  <label>
                    G
                    <input type="number" name="G1" />
                  </label>{" "}
                  <br />
                  <label>
                    MP
                    <input type="number" name="MP1" />
                  </label>{" "}
                  <br />

                  <label>
                    PER
                    <input type="number" name="PER1" />
                  </label>{" "}
                  <br />

                  <label>
                    TS
                    <input type="number" name="TS1" />
                  </label>
                  <br />

                  <label>
                    3PAr
                    <input type="number" name="3PAr1" />
                  </label>{" "}
                  <br />

                  <label>
                    FTr
                    <input type="number" name="FTr1" />
                  </label>{" "}
                  <br />

                  <label>
                    ORB%
                    <input type="number" name="ORB%1" />
                  </label>{" "}
                  <br />

                  <label>
                    DRB%
                    <input type="number" name="DRB%1" />
                  </label>{" "}
                  <br />

                  <label>
                    TRB%
                    <input type="number" name="TRB%1" />
                  </label>{" "}
                  <br />

                  <label>
                    AST%
                    <input type="number" name="AST%1" />
                  </label>{" "}
                  <br />

                  <label>
                    STL%
                    <input type="number" name="STL%1" />
                  </label>{" "}
                  <br />

                  <label>
                    BLK%
                    <input type="number" name="BLK%1" />
                  </label>{" "}
                  <br />

                  <label>
                    TOV%
                    <input type="number" name="TOV%1" />
                  </label>{" "}
                  <br />

                  <label>
                    USG%
                    <input type="number" name="USG%1" />
                  </label>{" "}
                  <br />

                  <label>
                    OWS
                    <input type="number" name="OWS1" />
                  </label>{" "}
                  <br />

                  <label>
                    DWS
                    <input type="number" name="DWS1" />
                  </label>{" "}
                  <br />

                  <label>
                    WS
                    <input type="number" name="WS1" />
                  </label>{" "}
                  <br />

                  <label>
                    WS/48
                    <input type="number" name="WS/48_1" />
                  </label>{" "}
                  <br />

                  <label>
                    OBPM
                    <input type="number" name="OBPM1" />
                  </label>{" "}
                  <br />

                  <label>
                    DBPM
                    <input type="number" name="DBPM1" />
                  </label>{" "}
                  <br />

                  <label>
                    BPM
                    <input type="number" name="BPM1" />
                  </label>{" "}
                  <br />

                  <label>
                    VORP
                    <input type="number" name="VORP1" />
                  </label>{" "}
                  <br />

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
                    Guard
                    <input type="number" name="guard2" />
                  </label>{" "}
                  <br />
                  <label>
                    Forward
                    <input type="number" name="forward2" />
                  </label>{" "}
                  <br />
                  <label>
                    Center
                    <input type="number" name="center2" />
                  </label>{" "}
                  <br />
                  <label>
                    G
                    <input type="number" name="G2" />
                  </label>{" "}
                  <br />
                  <label>
                    MP
                    <input type="number" name="MP2" />
                  </label>{" "}
                  <br />

                  <label>
                    PER
                    <input type="number" name="PER2" />
                  </label>{" "}
                  <br />

                  <label>
                    TS
                    <input type="number" name="TS2" />
                  </label>
                  <br />

                  <label>
                    3PAr
                    <input type="number" name="3PAr2" />
                  </label>{" "}
                  <br />

                  <label>
                    FTr
                    <input type="number" name="FTr2" />
                  </label>{" "}
                  <br />

                  <label>
                    ORB%
                    <input type="number" name="ORB%2" />
                  </label>{" "}
                  <br />

                  <label>
                    DRB%
                    <input type="number" name="DRB%2" />
                  </label>{" "}
                  <br />

                  <label>
                    TRB%
                    <input type="number" name="TRB%2" />
                  </label>{" "}
                  <br />

                  <label>
                    AST%
                    <input type="number" name="AST%2" />
                  </label>{" "}
                  <br />

                  <label>
                    STL%
                    <input type="number" name="STL%2" />
                  </label>{" "}
                  <br />

                  <label>
                    BLK%
                    <input type="number" name="BLK%2" />
                  </label>{" "}
                  <br />

                  <label>
                    TOV%
                    <input type="number" name="TOV%2" />
                  </label>{" "}
                  <br />

                  <label>
                    USG%
                    <input type="number" name="USG%2" />
                  </label>{" "}
                  <br />

                  <label>
                    OWS
                    <input type="number" name="OWS2" />
                  </label>{" "}
                  <br />

                  <label>
                    DWS
                    <input type="number" name="DWS2" />
                  </label>{" "}
                  <br />

                  <label>
                    WS
                    <input type="number" name="WS2" />
                  </label>{" "}
                  <br />

                  <label>
                    WS/48
                    <input type="number" name="WS/48_2" />
                  </label>{" "}
                  <br />

                  <label>
                    OBPM
                    <input type="number" name="OBPM2" />
                  </label>{" "}
                  <br />

                  <label>
                    DBPM
                    <input type="number" name="DBPM2" />
                  </label>{" "}
                  <br />

                  <label>
                    BPM
                    <input type="number" name="BPM2" />
                  </label>{" "}
                  <br />

                  <label>
                    VORP
                    <input type="number" name="VORP2" />
                  </label>{" "}
                  <br />

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
          {submitted && <h2> Prediction: All-Star</h2>}
          {submitted && (
            <>
              <h3> Career Stats </h3>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right"> Length</TableCell>
                    <TableCell align="right"> WS/48</TableCell>
                    <TableCell align="right"> Offensive Box +/-</TableCell>
                    <TableCell align="right"> Defensive Box +/-</TableCell>
                    <TableCell align="right"> Overall Box +/- </TableCell>
                    <TableCell align="right"> VORP </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="right"> 10 </TableCell>
                    <TableCell align="right"> 0.2055</TableCell>
                    <TableCell align="right"> +7.11 </TableCell>
                    <TableCell align="right"> -0.72</TableCell>
                    <TableCell align="right"> +6.37 </TableCell>
                    <TableCell align="right"> 5.11 </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {/* split into two columns of equal width and height */}
              <div className="row">
                <div className="col colleft">
                  <h3> Closest Player Comparison</h3>
                  {/* put image side by side to text about player */}
                  <div className="playercomprow">
                    <img
                      src="https://nba-players.herokuapp.com/players/curry/stephen"
                      alt="DAL"
                      className="playercompimg"
                    />
                    <div className="playercompcol">
                      <div className="playercompinfo">Stephen Curry</div>
                      <div className="playercompinfo">Age: 30</div>
                      <div className="playercompinfo">Seasons Played: 10</div>
                      <div className="playercompinfo">VORP: 0.5</div>
                    </div>
                  </div>
                  <div className="honorablementions">
                    <h3> Honorable Mentions</h3>
                    <div>
                      <Chip
                        color="primary"
                        clickable={false}
                        className="player-chip"
                        label="Kobe Bryant"
                        variant="outlined"
                      />
                      <Chip
                        color="primary"
                        clickable={false}
                        className="player-chip"
                        label="Michael Jordan"
                        variant="outlined"
                      />
                      <Chip
                        color="primary"
                        clickable={false}
                        className="player-chip"
                        label="Lebron James"
                        variant="outlined"
                      />
                    </div>
                    <div classname="secondcomprow">
                      <Chip
                        color="primary"
                        clickable={false}
                        className="player-chip"
                        label="Kevin Durant"
                        variant="outlined"
                      />
                      <Chip
                        color="primary"
                        clickable={false}
                        className="player-chip"
                        label="Brian Scalabrine"
                        variant="outlined"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  {" "}
                  <Scatterplot />{" "}
                </div>
              </div>
            </>
          )}
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

        .playercomprow {
          height: 100px;
          width: 100%;
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
        .secondcomprow {
          margin-top: 10px;
        }

        .playerChip {
          padding-margin: 10px;
        }

        .right {
          margin-left: 20px;
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
          display: inline;
          width: 100px;
          height: 100%;
          object-fit: cover;
          float: left;
        }

        .playercompinfo {
          margin-left: 20px;
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
