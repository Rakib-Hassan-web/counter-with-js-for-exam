

let h2 =document.querySelector('h2')
let input =document.querySelector('input')
let button =document.querySelector('button')
let h1 =document.querySelector('h1')





let handlebutton =()=>{
   

    if(input.value==""){
        h2.innerHTML="kichhu lekh"
    }

    else if( input.value>0){


     let i= 0

     let counter = ()=>{
        i++

        if(i == input.value){
            clearInterval(stop)
        }
     h1.innerHTML=i
     }

     let stop = setInterval ( counter ,50)










    }






}