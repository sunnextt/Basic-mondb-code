
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true,  useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
   },
  reviev: String
});
const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Apple is really good for body"
});

// fruit.save();

 const personSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true
   },
   age: Number,
 });

const Person = mongoose.model('Person', personSchema)

 const person = new Person({
   name: "John Doe",
   age: 37
 });

// person.save();

// const mango = new Fruit({
//   name: "Mango",
//   rating: 8,
//   review: "Too sweet"
// });
//
// const penapple = new Fruit({
//   name: "Penapple",
//   rating: 7,
//   review: "Too sweet"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 9,
//   review: "Too sweet"
// })



// HOW TO INSERT MANY ITEM TO DB

// Fruit.insertMany([mango, penapple, orange], (err) => {
// if (err) {
// console.log(err);
// } else {
// console.log("successfully save all the fruit into fruitsDB");
// }
// });

// DELETE ONE ITEM FROM DB

// Person.deleteOne({
//   age: "37",
// }, (err) => {
//   if (err) {
// console.log(err);
//   } else {
// console.log("success");
//   }
// })

// DELETE MANY ITEM FROM DB

// Fruit.deleteMany({
//   name: "Penapple",
// }, (err) => {
//   if (err) {
// console.log(err);
//   } else {
// console.log("success");
//   }
// })



// HOW TO ACCESS EACH DATA IN DB

// Fruit.find((err, fruits) =>{
// if (err) {
// console.log(err);
// } else {
// mongoose.connection.close();
// fruits.forEach((fruit) => {
// console.log(fruit.name);
//
// });
// }
// });
