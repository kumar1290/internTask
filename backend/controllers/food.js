const foodTable = require("../models/foodItems");

const getFood = async (req, res, next) => {
  // res.status(200).json({message: "Hello world !! List of foods coming soon.."});
  let foods;
  try {
    foods = await foodTable.find();
    console.log(foods);
  } catch (error) {
    console.log(error);
  }
  if (!foods) {
    console.log("No items found in list..");
  }
  res.json({
    food: foods.map((x) => x.toObject()),
  });
  return;
};

const addFood = async (req, res, next) => {
    console.table(req.body) ;
  const { name, desc, price } = req.body;
  const newfood = new foodTable({
    name,
    desc,
    price,
  });
  try {
  await newfood.save();
  } catch (err) {
    return next(err) ;
  }
  res.json(newfood);
};
const deleteFood = () => {};
const updateFood = () => {};

const obj = { getFood, addFood, updateFood, deleteFood };

module.exports = obj;
