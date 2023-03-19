import React, { useState, useEffect, useRef } from "react";
import { Grid, Container, Typography, Button } from "@material-ui/core";

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

import { Details, Main } from "./components";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const [display, setDisplay] = useState(true);
  const [buttonColor, setButtonColor] = useState("red");

  var handleDisplay = () => {
    setDisplay(false);
  };

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      {display ? (
        <div style={{ marginTop: "20px", marginLeft: "10px" }}>
          <Typography className={classes.text} variant="h7">
            Remove Demo Transactions before adding new Transactions
            <button className={classes.button} onClick={handleDisplay}>
              x
            </button>
          </Typography>

          <div></div>
        </div>
      ) : null}

      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>

      <PushToTalkButtonContainer>
        <div>
          <br />
          <br />
          <br />
          <PushToTalkButton
            size="85px"
            placement="bottom"
            intro="Push to Add Transaction"
            captureKey=" "
          />
        </div>
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
