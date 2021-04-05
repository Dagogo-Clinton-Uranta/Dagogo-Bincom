window.onload = function() {
const display1El = document.querySelector('.display-1')
const display2El = document.querySelector('.display-2')
const tempResultEl = document.querySelector('.temp-result')
const numbersEl =document.querySelectorAll('.number')
const operationsEl = document.querySelectorAll('.operation')
const equalEl = document.querySelector('.equal')
const clearAllEl = document.querySelector('.all-clear')
const clearLastEl = document.querySelector('.last-entity-clear')

let dis1Num = ''
let dis2Num = ''
let result = null
let lastOperation = ''
let haveDot = false

numbersEl.forEach(number => {
   
   number.addEventListener('mousedown', (e) => {
    number.style.boxShadow= 'inset -4px -4px 7px #ffffff73, inset 3px 3px 5px rgba(94, 104, 121, 0.288)';
    number.style.transform='scale(0.8)'
   })
   
   number.addEventListener('mouseup', (e) => {
    number.style.boxShadow= '';
    number.style.transform='scale(1)'
   }) 
   
    number.addEventListener('click', (e) => {

        if(e.target.innerText === '.' && !haveDot){
          haveDot = true
        }
        else if(e.target.innerText === '.' && haveDot){
          return;
        }
        dis2Num += e.target.innerText
        display2El.innerText= dis2Num
    })
})

 operationsEl.forEach(operation => {
       operation.addEventListener('click',(e) => {
           if(!dis2Num){return}

           haveDot = false

           const operationName = e.target.innerText
           
           if(dis1Num && dis2Num && lastOperation){
             mathOperation()
           }
           else{
             result=parseFloat(dis2Num)
           }
           clearVar(operationName)
           lastOperation =operationName
           console.log(result)
       })
 })

 function clearVar(name =''){
   dis1Num += dis2Num + ' ' + name + ' '
   display1El.innerText =dis1Num
   display2El.innerText=''
   dis2Num = ''
   tempResultEl.innerText= result
 }

  function mathOperation(){
   if(lastOperation === 'x')
   { result = parseFloat(result) * parseFloat(dis2Num)}
   else if (lastOperation === '-')
   { result = parseFloat(result) - parseFloat(dis2Num)}
   else if (lastOperation === '+')
   { result = parseFloat(result) + parseFloat(dis2Num)}
   else if (lastOperation === '/')
   { result = parseFloat(result) / parseFloat(dis2Num)}
   else if (lastOperation === '%')
   { result = parseFloat(result) % parseFloat(dis2Num)}
  }

  equalEl.addEventListener('click', (e) => {
     if (!dis1Num||!dis2Num){return}
     else{
       haveDot =false;
       mathOperation()
       clearVar()
       display2El.innerText = result
       tempResultEl.innerText=''
       dis2Num = result
       dis1Num =''
     }

  })

  clearAllEl.addEventListener('click', (e) => {
    dis1Num = ''
    dis2Num = ''
    display1El.innerText ='0'
    display2El.innerText ='0'
    result=''
    tempResultEl.innerText = '0'
  })

  clearLastEl.addEventListener('click', (e) => {
    display2El.innerText =''
    dis2Num = '' 
   
  })
}