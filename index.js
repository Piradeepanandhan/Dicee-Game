var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+randomNumber1+".png";
var ranImage1= "images/"+randomImage1;
var image1=document.querySelectorAll('img')[0];
image1.setAttribute('src',ranImage1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+randomNumber2+".png";
var ranImage2 = "images/"+randomImage2;
var image2=document.querySelectorAll('img')[1];
image2.setAttribute('src',ranImage2);


if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML= "Palyer-1 is the winner";
}
else if (randomNumber2 > randomNumber1){
   document.querySelector("h1").innerHTML= "Palyer-2 is the winner";
}
else{
   document.querySelector("h1").innerHTML= "Match Draw";
}
