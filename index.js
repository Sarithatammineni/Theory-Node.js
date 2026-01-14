import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";

console.log(
  boxen(message, {
    title,
    titleAlignment: "center",
    padding: 0,
    margin: 1
  })
);

console.log(
  boxen(message, {
    title,
    titleAlignment: "center",
    padding: 0,
    margin: 1,
    borderStyle: "singleDouble"
  })
);

console.log(
  boxen("unicorns love rainbows", {
    title,
    titleAlignment: "center",
    padding: 0,
    margin: 1,
    borderStyle: "round"
  })
);
