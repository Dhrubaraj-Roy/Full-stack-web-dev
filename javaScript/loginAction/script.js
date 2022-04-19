

// var checkDrive = function (age){
//     if (Number(age) < 18) {
//         console.log("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         console.log("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
// checkDrive(18);

//exercise --> 6
// var array2 = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(array2.reverse())


//exercise --> 7
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password".Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var database = [
    {
        userName: "dhruba",
        password: "1234"
    },
    {
        userName: "taatha",
        password: "0987"
    },
    {
        userName: "sayan",
        password: "1111"
    },
    {
        userName: "tarun",
        password: "1212"
    }

]
var newsfeed = [
    {
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
]
var userNamePrompt = prompt("Enter your username");
var passwordPrompt = prompt("Enter your password");
function isUserValid (user, pass){
    for(var i = 0; i < database.length; i++){
        if(database[i].userName === user &&  database[i].password === pass){
            return true;
        } 
    }
    return false;
}
function signIn(user, pass){
    if(isUserValid(user, pass)){
        console.log(newsfeed);
    } else  {
            alert("Sorry you entered wrong password");
        }
}
signIn(userNamePrompt, passwordPrompt);