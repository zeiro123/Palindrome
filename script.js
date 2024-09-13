//My original implemetation
const input=document.querySelector("#input-text")
const checkbtn=document.querySelector("#check-btn")
const response=document.querySelector("#response")
let display=document.querySelector("p")


checkbtn.onclick=()=>{
    let inputval=input.value
    if (inputval.trim()==""){
        alert("enter something in the text box")
        console.log()
    }else{
        const regex=/[^a-z]/gi;
        inputval=inputval.replace(regex,'')
        let a=palindrome(inputval)
        display.innerHTML=a
        
    }
}

function palindrome(inputstr){
    const inputstring=inputstr.length-1
    let message=""
    let tempstore="";
    for(let i=inputstring;i>=0;i--){
        tempstore+=inputstr[i]
    }
    if(tempstore.toLowerCase()===inputstr.toLowerCase()){
        message=`The word ${inputstr} is a palindrome`

    }else{
        message=`The word ${inputstr} is NOT a palindrome`
    }
    return message

}
/* Better verion from Gemini 12/09/2024
function palindrome(inputstr) {
    // Convert the string to lowercase and use method chaining to reverse the string
    let reversedStr = inputstr.toLowerCase().split('').reverse().join('');
    
    // Compare reversed string with original (case-insensitive)
    if (reversedStr === inputstr.toLowerCase()) {
        return `The word "${inputstr}" is a palindrome.`;
    } else {
        return `The word "${inputstr}" is NOT a palindrome.`;
    }
}*/