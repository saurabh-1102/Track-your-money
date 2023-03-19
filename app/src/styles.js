import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "5%",
    },
  },
  last: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      paddingBottom: "200px",
    },
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
      // marginTop: "100px",
    },
  },

  text: {
    backgroundColor: "white",
    padding: "5px",
    borderRadius: "10px",
    fontFamily: "Times New Roman",
  },

  button: {
    fontSize: "15px",
    backgroundColor: "#bdb9b9",
    border: "none",
    borderRadius: "10px",
    marginLeft: "5px",
  },
}));
