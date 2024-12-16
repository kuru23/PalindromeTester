// Matt Fay
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
        document.getElementById("Answer").innerHTML = `${inputString} is not a Palindrome!!!`
    }
}

}


function login(){
    let f = document.getElementById("first").value
    let l = document.getElementById("last").value
    var img = document.getElementById('ham');
    var nameString = `${f} ${l}`
    if (nameString.length < 21){
    console.log(nameString)
    let z = document.getElementById("zip").value

console.log(z)
console.log(z.length)
if (z.length == 5){ 
document.getElementById("Answer").innerHTML = "we're sending you a free hamster"
img.style.visibility = "visible";
} else {img.style.visibility = "hidden";} 

}}