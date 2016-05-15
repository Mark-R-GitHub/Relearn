/*function agecheck()
{
    var minimumage = 18;
    var ageinput = document.getElementsByName("age");

    console.log("working: 1");
    if(ageinput.value < minimumage)
    {
        alert('You are not old enough to enter this website.');
        console.log("working: 2");
    }
    else
    {
        alert('You can enter this website.');
        console.log("working: 3")
        window.location.href = "/html/meme.html";
    }
}
*/

$(document).ready(function(){
    $('#submit').click(function() {
        var age = document.getElementById("age");
        if(age.value < 18)
        {
            alert("You are not old enough to enter this website.");
            console.log("Age is less than 18 therefore access denied.")
        }
        else if(age.value >= 18 )
        {
            alert("You can enter the website");
            window.location.href = "/html/redirect.html";
     }
});
});
