console.log('hello')
let titleDiv=document.getElementById('title')
console.log('before: ',titleDiv.innerText)
let message='Goodbye my lover!'
titleDiv.innerText=message;
console.log('after: ',titleDiv.innerText)
titleDiv.innerHTML=`<p>${message}</p>`
titleDiv.style.color='red'

// let redDiv=document.getElementById('red')
// let yellowDiv=document.getElementById('yellow')
// let greenDiv=document.getElementById('green')

// redDiv.onclick=()=>console.log('red')
// yellowDiv.onclick=()=>console.log('yellow')
// greenDiv.onclick=()=>console.log('green')

const squares=document.querySelectorAll('.colorSquare')
const timesClicked={'red':0, 'yellow':0, 'green':0}
squares.forEach(square=>{
  square.onclick=()=>{
    timesClicked[square.value]+=1
    square.innerText=timesClicked[square.value]
  }
})
function clearScores(){
  timesClicked.red=0
  timesClicked.yellow=0
  timesClicked.green=0
  squares.forEach(square=>{
    square.innerText=''
  })
} 

const clearGameBtn=document.getElementById('clear-game')
clearGameBtn.onclick=()=>clearScores()