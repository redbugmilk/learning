//Array like structure where each element represents some property of a record
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi = ["brown", true, 40]; //Not tuple

pepsi[0] = 40;
pepsi[2] = true;

const pepsi1: [string, boolean, number] = ["brown", true, 40]; //tuple
pepsi1[0] = 40;
pepsi1[2] = true;

type Drink = [string, boolean, number];

const pepsi2: Drink = ["brown", true, 40]; //tuple
pepsi2[0] = 40;
pepsi2[2] = true;

const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower:400,
    weight: 3354
}

