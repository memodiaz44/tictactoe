const clicked = document.querySelectorAll('.no')
clicked.disabled = true
console.log(clicked)
let match = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],

    [2,1,0],
    [5,4,3],
    [8,7,6],

    [0,3,6],
    [7,4,1],
    [8,5,2],

    [8,4,0],
    [6,4,2],

]
let player1 = 'X'   
let player2 = 'O'


let maindi = document.getElementsByClassName('bord')
let playx = document.getElementById('pone')
let playo = document.getElementById('pow')

let paro = document.createElement('p')

let paro2 = document.createElement('p')


paro.textContent = 'PLAYER X`S WON!'
paro2.textContent = 'PLAYER O`S WON!'

function refreshPage(){
  return   document.location.reload();
} 



let na = []

let an = []

for(var aee of clicked){
    an.push(clicked[aee])

}
an.fill(null)

for(var eea of clicked){
    na.push(clicked[eea])

}
na.fill(null)
let lav = true

let val = true;
const  check = () => {
    if(val === true){ 
    clicked.forEach( 
       a =>  a.addEventListener('click' , hellow ) ) ;
    }else if(val === false){
        clicked.forEach( 
            b =>  b.removeEventListener('click' , hellow ) );
    }

 return val     
}
check(val)

function removeClick () {
    return  clicked.forEach( 
        b =>  b.removeAttribute(an ) );

}

function triger() {
    return maindi[0].appendChild(refreshPage())
}




console.log(val)

var turn = 0 
var swt
console.log(clicked.id)

 function hellow (e ) {
    let p = []
    let q = []
    let arr = e.target.id;
    let bar = e.target.id;
    let leng =  e 
    let res = []
    for(let i = 0; i < leng.length; i++){
        res.push(leng[i])
    }
    



   while(an.length !== null )
   {
    if(an.indexOf() !== null){  
   console.log(p)
      if(lav) { 
function turns () { 
    if(e.target.innerHTML === ''){ 
   if(turn === 0   ){ 
    removeClick;
    e.target.id;
    e.target.innerHTML =  player1 ;
    turn = 1;    
    e.target.style.color = 'red'
    
   
    console.log(val)
    for(let i = 0; i < arr.length; i++){
        p.push(arr[i])
    }
    an.unshift(p)
    console.log(an)
}  else
  {
    removeClick;
       
        e.target.id;
        e.target.innerHTML =  player2 ;
        turn--;  
        e.target.style.color = 'blue'
        for(let ie = 0; ie < bar.length; ie++){
            q.push(bar[ie])
        }
        
        na.unshift(q)
        console.log(na)
  }
}
}
      }

turns()

    an.length--

    
   

    }
var sav = []
var lat = []




         for(let u = 0; u < an.length; u++ ){ 
          if(an[u] !== null){
            lat.unshift(parseInt(...an[u])) 
          }
         }
         for(let r = 0; r < na.length; r++ ){ 
            if(na[r] !== null){
              sav.unshift(parseInt(...na[r]))
            }
           }
         let ow =[]
         console.log(lat)
       for(let i = 0; i < match.length; i++){
              ow.push(match[i])
       }
    
   
         lat = JSON.stringify(lat)
         match = JSON.stringify(match)
         sav = JSON.stringify(sav)

         const winnigs = function() { 
            var c = match.indexOf(lat) ;
            var a = match.indexOf(sav) ;
            let bol = 0
            if(c !== -1){
                
               
               alert('Player X WON!')
               val = false
               playx.innerHTML++
               localStorage.setItem('score', playx.innerHTML)               
               maindi[0].appendChild(paro)               
               setTimeout(triger, 2000)  
               return bol = 2
            }else if(a !== -1){
               alert('Playe O WON!')
               val = false
               playo.innerHTML++
               localStorage.setItem('score2', playo.innerHTML)
               maindi[0].appendChild(paro2)
               setTimeout(triger, 2000)
              
               return bol = 2
            }
    
            return bol
           }
          

        
        console.log(winnigs())
        console.log(check())
      
    break
    }   

 }


               

(() =>{ 
 let score = localStorage.getItem('score')
 let score2 = localStorage.getItem('score2')
 if(!score2 ){
    playo.innerHTML = 0
}else {
    playo.innerHTML = score2
}
 
if(!score ){
    playx.innerHTML = 0
}else {
    playx.innerHTML = score
}
})()
// finally it works!!!







