function factorial()
{
    var n = document.getElementById("num").value;
    var i, f=1;
    for (i=1; i<=n; i++) f *= i;
    document.getElementById("fact").innerHTML = f;
    alert("The factorial of entered number is " + f );
}