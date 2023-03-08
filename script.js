var hoursSlept = Number(
  prompt(
    "How many hours did you sleep last night? (enter a number between 0-12)"
  )
);

if (hoursSlept > 12) {
  console.log(
    "Is that really how long you slept?  Tell the truth! (And try again.)"
  );
} else if (hoursSlept >= 8) {
  console.log("Great job--8 or more hours is perfect!");
} else if (hoursSlept >= 5) {
  console.log("Well, that's not bad, but more sleep would be better.");
} else {
  console.log(
    "You really should get some more sleep. Caffiene only lasts so long."
  );
}
