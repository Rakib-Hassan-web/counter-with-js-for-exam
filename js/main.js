

let h2 =document.querySelector('h2')
let input =document.querySelector('input')
let button =document.querySelector('button')
let h1 =document.querySelector('h1')





let handlebutton =()=>{
   
    
    if(input.value == '')
    {
        h2.innerHTML="inpuet any number what ever you want"
    }


    else if(input.value > 0){
            

    let i =0


    let count = ()=>{

    i++

 if(input.value == i){
    clearInterval(out)
 }

 h1.innerHTML=i
    }




     let out =  setInterval(count,100)


    }
}