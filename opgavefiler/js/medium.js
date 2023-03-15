/* Opgave 1*/

let myBall=document.getElementById('ballOne');
let myBuhButton=document.getElementById('buhOneButton');

myBuhButton.addEventListener('click',()=>{
    myBall.classList.toggle('animateRight');
})



/*opgave 2*/

let myBalls=document.getElementsByClassName('balls');
let myBuhTwoButton=document.getElementById('buhTwoButton');

myBuhTwoButton.addEventListener('click',()=>{
    for(const manyBolls of myBalls){
        manyBolls.classList.toggle('animateRight');
       }
});
 



/*opgave 3*/



let myHardBalls=document.getElementsByClassName('hardBalls');
let myBuhThreeButton =document.getElementById('buhThreeButton');

myBuhThreeButton.addEventListener('click',()=>{
    let direction = "right";

    for(const manyBolls of myHardBalls){

        if (direction =="right"){
            manyBolls.classList.toggle('animateRight');
            direction="left";
        }

        
        else{
            manyBolls.classList.toggle('animateLeft');
            direction= "right";
        }
       }
       
});



