import DateComponent from "./Component/DateComponent";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <DateComponent />
      <Footer />
    </div>
  );
}

export default App;
