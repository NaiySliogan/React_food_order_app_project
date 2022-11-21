import { useState, useRef } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const [AmountisValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "10",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button type="submit">+ Add</button>
        {!AmountisValid && <p className={classes.error}>Please enter a valid amount (1-10).</p>}
      </form>
    </Card>
  );
};

export default MealForm;
