
var secretNum = Math.floor((Math.random() * 100) + 1);
console.log(secretNum);
  var counter = 0;
  var name  = prompt("Enter Username");

function hiLo() {
  //get user input, determine whether user input is higher or lower or same as secret number. Display message according to user answer.

  var userNumber = document.getElementById("user_input").value;

console.log(counter);

  if (userNumber != 1,100) {
    document.getElementById("answer").innerHTML = "Must enter a valid number";
  }
  if (parseInt(userNumber) > secretNum && counter < 7) {
    document.getElementById("answer").innerHTML = "Your guess is too high!";
counter++;
  }
  if(parseInt(userNumber) < secretNum && counter < 7) {
    document.getElementById("answer").innerHTML = "Your guess is too low!";
    counter ++;
}
if (counter === 7){
  document.getElementById("answer").innerHTML = "Out of turns!";
  document.getElementById("submit").disabled.innerHTML;

}

if(parseInt(userNumber) === secretNum) {
  document.getElementById("answer").innerHTML = "You guessed it! WINNER " + name + "!";
}

  document.getElementById("user_input").value = "";
}



//     // if (counter === 6) {
//     //   document.getElementById("answer").innerHTML = "Warning! You have one guess left";
//     // }
//     //   if (counter === 7) {
//     //     document.getElementById("answer").innerHTML = "You have run out of guesses. No more games for you!";
//     // }
//         // if (counter > 7) {
//         //   document.getElementById.onclick().innerHTML = ""
//         // }
//         // onClick="this.form.submit(); this.disabled=true; this.value='Sending…';
