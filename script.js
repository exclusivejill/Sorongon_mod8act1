var fname = prompt("Enter your full name", fname);
document.getElementById("fname").innerHTML = fname;

var username = prompt("Enter your username", username);
document.getElementById("username").innerHTML = username;

var gender = confirm("What is your gender? \nIf MALE, select OK. \nIf FEMALE, select CANCEL");
if(gender==true){
    var genders= "MALE";
    document.getElementById("gender").innerHTML = "M";
}else{
    var genders= "FEMALE";
    document.getElementById("gender").innerHTML = "F";
    
}   
alert("Your profile gender has been set to " + genders);

var desc, byear, age, ppic;
desc = prompt("Tell about yourself", desc);
document.getElementById("desc").innerHTML = desc;

byear = prompt("Insert your birth year");
document.getElementById("year").innerHTML = byear;

age = 2023 - byear;
document.getElementById("age").innerHTML = age;

var pf = confirm("Do you want a customized profile picture?");

if(pf==true){   
    var pic = prompt("Enter the file name of the profile picture (ex: wow.png)", pic);
    document.getElementById("ppic").src = pic;
}
else{

} 



