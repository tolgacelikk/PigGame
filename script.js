//Selecting Elements
const score0El=document.getElementById('score--0')
const score1El=document.getElementById('score--1')
const currentscore0=document.getElementById('current--0')
const currentscore1=document.getElementById('current--1')
const newbtn=document.querySelector('.btn--new')
const rollbtn=document.querySelector('.btn--roll')
const holdbtn=document.querySelector('.btn--hold')
const diceEl=document.querySelector('.dice')
const player0=document.querySelector('.player--0')
const player1=document.querySelector('.player--1')
let currentscore=0
let score=0;
let activeplayer=0
let scores=[0,0]
let playing=true
const switchplayer=function(){
    document.getElementById(`current--${activeplayer}`).textContent=0
        
    activeplayer=activeplayer  === 0 ? 1 : 0
    currentscore=0 
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}

//Start Conditions
score0El.textContent=0
score1El.textContent=0
diceEl.classList.add('hidden')

rollbtn.addEventListener('click',function(){
    if(playing){

    
    //1.Generating random dice roll
    const dice=Math.trunc(Math.random()*6)+1

    
    //Display Dice
    diceEl.classList.remove('hidden')
    diceEl.src=`dice-${dice}.png`

    //
    if(dice!==1){
        currentscore=currentscore+dice
        document.getElementById(`current--${activeplayer}`).textContent=currentscore
       

        
    }
    else{
       
      switchplayer()
    }
}})

holdbtn.addEventListener('click',function(){
    if(playing){
    scores[activeplayer]+=currentscore
    document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer]
if(scores[activeplayer]>=20){
    playing=false
    diceEl.classList.add('hidden')
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
    diceEl.classList.remove('.dice')

}
else{
    switchplayer()

}

    
    

}})
newbtn.addEventListener('click',function(){
    currentscore=0
    currentscore0.textContent=0
    currentscore1.textContent=0
    scores=[0,0]
    
    score0El.textContent=0
    score1El.textContent=0
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    activeplayer=0
    playing=true
    
})