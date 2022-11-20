import classes from "./ViewOrdersActions.module.css";
const DayRangeOptions = [
  {
    label: "All Orders",
    dayCompareFunction() {
      return true;
    },
  },
  {
    label: "Today",
    dayCompareFunction({ createdAt }) {
      const dateObject = new Date(createdAt.seconds * 1000);
      const today = new Date();
      return today.toDateString() === dateObject.toDateString();
    },
  },
  {
    label: "Last 7 days",
    dayCompareFunction({ createdAt }) {
      const dateObject = new Date(createdAt.seconds * 1000);
      const dateToCompare = new Date();
      dateToCompare.setDate(dateToCompare.getDate() - 7);

      return dateObject > dateToCompare;
    },
  },
  {
    label: "Last 30 days",
    dayCompareFunction({ createdAt }) {
      const dateObject = new Date(createdAt.seconds * 1000);
      const dateToCompare = new Date();
      dateToCompare.setDate(dateToCompare.getDate() - 30);

      return dateObject > dateToCompare;
    },
  },
];

const ViewOrdersActions = ({ handleButtonClick }) => {
  return (
    <>
      {DayRangeOptions.map((option) => (
        <button
          className={classes.button}
          key={option.label}
          onClick={() => handleButtonClick(option.dayCompareFunction)}
        >
          {option.label}
        </button>
      ))}
    </>
  );
};

export default ViewOrdersActions;
