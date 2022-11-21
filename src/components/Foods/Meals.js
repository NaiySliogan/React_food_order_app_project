import classes from "./Meals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const Meals = (props) => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  const mealList = [...DUMMY_MEALS];

  return (
    <Card className={classes.meals}>
      <ul>
        {mealList.map((food) => (
          <MealItem
            key={food.id}
            id = {food.id}
            name={food.name}
            description={food.description}
            price={food.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Meals;
