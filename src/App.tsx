import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Order } from "./Pages";
import { Box, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background:
        "no-repeat url(https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg)",
      "background-size": "cover",
      "background-position": "center",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Box className={classes.root}>
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
