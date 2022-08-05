import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { differenceInDays } from "date-fns/esm";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    maxWidth: "50%",
    textAlign: "center",
  },
  message: {
    marginTop: "2em",
    fontWeight: "bold",
    maxWidth: "50%",
  },
});

function DateComponent() {
  const classes = useStyles();

  const [date, setDate] = React.useState(new Date());
  const [palindrome, setPalindrome] = React.useState(false);
  const [isButtonCLicked, setIsButtonClicked] = React.useState(false);
  const [difference, setDifference] = React.useState(0);
  const [nearestPalindrome, setNearestPalindrome] = React.useState("");

  const handleChange = (newValue) => {
    setDate(newValue);
  };

  const onClick = () => {
    setIsButtonClicked(true);

    if (isPalindrome(date)) {
      setPalindrome(true);
    } else {
      setPalindrome(false);
      findNearestPalindrome();
    }
  };

  const isPalindrome = (userDate) => {
    const dateString = userDate.toLocaleDateString("en-US"); //8/5/2022 - "MM/DD/YYYY"
    const splitDate = dateString.split("/").join("");
    const reversedDateString = splitDate.split("").reverse().join("");
    return splitDate === reversedDateString;
  };

  const findNearestPalindrome = () => {
    const nextDate = nextOrPreviousPalindrome(true);
    const previousDate = nextOrPreviousPalindrome(false);

    const nextDiff = differenceInDays(nextDate, date);
    const prevDiff = differenceInDays(date, previousDate);

    if (nextDiff < prevDiff) {
      setNearestPalindrome(nextDate.toLocaleDateString("en-US"));
      setDifference(nextDiff);
    } else {
      setNearestPalindrome(previousDate.toLocaleDateString("en-US"));
      setDifference(prevDiff);
    }
  };

  const nextOrPreviousPalindrome = (isNext) => {
    let isPalindromeDate = false;
    let userDate = new Date(date);
    while (!isPalindromeDate) {
      userDate.setDate(
        isNext ? userDate.getDate() + 1 : userDate.getDate() - 1
      );
      isPalindromeDate = isPalindrome(userDate);
    }
    return userDate;
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.text}>
        Is Your BirthDate Palindrome?
      </Typography>

      <Typography
        variant="h6"
        className={classes.text}
        style={{ marginBottom: "2em", fontSize: "14px" }}
      >
        (Date Format is "MM/DD/YYYY")
      </Typography>

      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Select Birth-Date"
              inputFormat={"MM/dd/yyyy"}
              value={date}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>

      <Button
        style={{ marginTop: "1em" }}
        onClick={onClick}
        variant="contained"
        color="primary"
      >
        Check
      </Button>

      {isButtonCLicked && (
        <span className={classes.message}>
          {palindrome
            ? "Your BirthDate is a Palindrome 🥳🥳🥳"
            : `${"Your BirthDate is not a Palindrome. The nearest Palindrome is "} ${nearestPalindrome} ${"Difference b/w your date and nearest Palindrome is"} ${difference} days`}
        </span>
      )}
    </div>
  );
}

export default DateComponent;
