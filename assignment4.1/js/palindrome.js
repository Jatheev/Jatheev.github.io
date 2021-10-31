function palindrome(str)
{

    var str=document.getElementById("palin").value;

    var input=str.split("");
    
    var output=input.reverse().join("");
    

    if(str==output){
    alert("The entry is a palindrome.");
    }
    else
    {
    alert("The entry is not a palindrome.");
    }
}

