// Problem 1
function seerToMon(seer) {
  //here it will handle unexpected function input type
  if (typeof seer != "number") {
    return "please enter a number";
  }
  //error handling for negetive numbers
  else if (seer < 0) {
    return "weight Can't be negetive.please enter a valid weight number";
  } else {
    /*using 40.0 (instead of just 40) will give the result in fraction and precise */
    const mon = seer / 40.0;
    return mon;
  }
}

// problem 2
function totalSales(shirt, pant, shoe) {
  //here it will handle unexpected function input type
  if (
    typeof shirt != "number" ||
    typeof pant != "number" ||
    typeof shoe != "number"
  ) {
    return "please enter 3 numbers";
  }
  //error handling for negetive numbers
  else if (shirt < 0 || pant < 0 || shoe < 0) {
    return "Quantity Can't be negetive.please enter a valid quantity number";
  } else {
    var total = 100 * shirt + 200 * pant + 500 * shoe;
    return total;
  }
}

// problem 3
function deliveryCost(tshirt) {
  //here it will handle unexpected function input type
  if (typeof tshirt != "number") {
    return "please enter T-shirt number";
  }
  //error handling for negetive numbers
  else if (tshirt < 0) {
    return "T-shirt number Can't be negetive.please enter a valid Tshirt number";
  } else {
    /*as we have to calculate separately for multiple segments,
                 so we took temp var to separate additional quantities
                 */
    var cost = 0;
    var temp = 0;
    if (tshirt <= 100) {
      cost = 100 * tshirt;
    } else if (tshirt > 100 && tshirt <= 200) {
      /*more than 100 tshirt means there already 100 tshirt with 100 tk fee, means additional 10000 Tk more*/
      temp = tshirt - 100;
      cost = temp * 80 + 10000;
    } else {
      /*more than 200 tshirt means there already 100 tshirt with 100tk =10000Tk, 100 tshirt with 80tk=8000Tk more*/
      temp = tshirt - 200;
      cost = temp * 50 + 10000 + 8000;
    }
    return cost;
  }
}

// problem 4
function perfectFriend(friends) {
  //here it will handle unexpected function input type
  if (typeof friends != "object") {
    return "please enter an array";
  }
  //error handling for empty array
  else if (friends.length == 0) {
    return "This is an empty array.please enter a valid array";
  } else {
    var perfect = [];
    for (const friend of friends) {
      // storing the first name with 5 characters
      if (friend.length == 5) {
        perfect = friend;
        break;
      }
    }
    /*if the result holder array can have a name, then it will return that, otherwise it will return "No perfect friend"
     */
    if (perfect != 0) {
      return perfect;
    } else {
      return "No perfect friend";
    }
  }
}

/*************-------------------------- 
// test cases to check all the functions
=======================================
console.log(seerToMon("hi"));
console.log(seerToMon(100));
console.log(seerToMon(-40));
console.log(totalSales("abc", 1, 2));
console.log(totalSales(-1, -5, -10));
console.log(totalSales(1, 1, 2));
console.log(deliveryCost("abc"));
console.log(deliveryCost(-43));
console.log(deliveryCost(201));
const a = [55555,5,2,3];
console.log(perfectFriend(a));
const a = [];
console.log(perfectFriend(a));
const a = 500;
console.log(perfectFriend(a));
const a = ["Safquat", "Majharul", "Rifat", "Ratul"];
console.log(perfectFriend(a));
=======================================
------------------------**************/
