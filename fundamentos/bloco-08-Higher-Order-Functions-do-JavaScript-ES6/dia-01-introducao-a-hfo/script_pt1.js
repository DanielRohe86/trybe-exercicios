const wakeUp = () => 'Acordando!!';

const drinkCoffee = () => 'Bora tomar café!!';

const bedTime = () => `Partiu dormir!!`;

//const doingThings = hour => function(hour);

const expressionExercise = (callback) => {
  return callback();
}

console.log(expressionExercise(bedTime));
