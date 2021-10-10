/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
var myVariable = [2, 4, 6, 8, 10];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */

var aboutMe = {
    name: "Don",
    surname: "Az",
    email: "savash@gmail.com",
    age: 24
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
aboutMe.doIhaveLicence = true;
console.log(aboutMe)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
delete aboutMe.age
console.log(aboutMe) 


/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */

let aboutMe2 = {
    name: "Dave",
    surname: "Benny",
    email: "qwert@gmail.com",
    age: 34
}

console.log(aboutMe.email=== aboutMe2.email)


/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */

let totalShoppingCart = 50

 if (totalShoppingCart > 50 ) {
    (totalShoppingCart+=10)
 }

 console.log(totalShoppingCart)
/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

function secondCustomerShoppingCard(ifExceedsFifty) {
    return (ifExceedsFifty> 50 ? (ifExceedsFifty*80/100):ifExceedsFifty)
}
console.log(secondCustomerShoppingCard(99))


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */

let car = {brand: "Volvo", model: "XC90", licensePlate: "WS04VSV"}

let car2 = {...car, licensePlate: "newplatenum2"}
console.log(car2)

let car3 = {...car, licensePlate: "newplatenum3"}
console.log(car3)

let car4 = {...car, licensePlate: "newplatenum4"}
console.log(car4)

let car5 = {...car, licensePlate: "newplatenum5"}
console.log(car5)

let car6 = {...car, licensePlate: "newplatenum6"}
console.log(car2)

let car7 = {...car, licensePlate: "newplatenum7"}
console.log(car7)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

let carsForRent = [car, car2, car3, car4, car5, car6, car7]
console.log(carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

carsForRent.pop()
carsForRent.shift()
console.log(carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

console.log(car.brand, car.model, car.licensePlate)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForSale arrays.
*/

/* WRITE YOUR ANSWER HERE */

let carsForSale = [car, car2, car3]

console.log(carsForSale)

totalCars = carsForSale + carsForRent

console.log(totalCars)

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
console.log()
for (i=0; i<=carsForSale; i++);

    carsForSale[i]
    console.log(carsForSale)

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/