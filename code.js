function check(){
    //prompt for input
 let inputString = prompt("Is this string a palindrome?")
 //how long?
 const len = inputString.length;
 console.log(inputString + " palindromecheck " + len)

 for (let i = 0; i < len / 2; i++) {
    if (inputString[i] == inputString[len - 1 - i]) {
     console.log("Palindrome");
     document.getElementById("Answer").innerHTML = "Palindrome!!!"
    }else{
        console.log("Not a palindrome");
        document.getElementById("Answer").innerHTML = "not a Palindrome!!!"
    }
}

}
