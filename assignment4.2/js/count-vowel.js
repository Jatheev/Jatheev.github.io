function cVowel()
{
    var str=document.getElementById("vowel").value;
    var vowel="aeiou";
    var ctr=0;

    for(var x=0;x<str.length;x++){
        for(var y=0;y<vowel.length;y++){
            if(str[x]==vowel[y])
            {
                ctr++;
            }
        }
    }
    alert("The Number of Vowel in Textbox is " + ctr);
}