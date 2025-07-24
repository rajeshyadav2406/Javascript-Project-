let Str = "NITIN";

let result = Str.split("").reverse().join("");

if (Str === result) {
     console.log("It's a Palindrome. ");
}
else{
    console.log("It's not a Palindrome.");
}
