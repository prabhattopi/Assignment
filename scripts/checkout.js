// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount=JSON.parse(localStorage.getItem("amount"))
  let length=amount.reduce(function(sum,el,i){
    return sum+Number(el)
  },0)
 

  
  // document.querySelector(".")
  document.querySelector('#wallet').innerText=length

  function falto(){
  

    let peices=document.querySelector("#number_of_seats").value
     if(length<Number(peices)*100){
      // document.querySelector('#wallet').innerText=null
       alert("Insufficient Balance!")
       
     }

     else{

       alert("Booking Successful!")
       length=length-Number(peices)*100
       amount=[]
       amount.push(length)
       localStorage.setItem("amount",JSON.stringify(amount))
       document.querySelector('#wallet').innerText=length
     }
  }
let data=JSON.parse(localStorage.getItem("movie"))

data.map(function(el,i){
  document.querySelector("#movie").innerHTML=null
    
       let div=document.createElement("div")
       let image=document.createElement("img")
       image.src=el.Poster
       let Title=document.createElement("p")
       Title.innerText=el.Title
       let year=document.createElement("p")
       year.innerText=el.Year
      //  let button=document.createElement("button")
      //  button.innerText="Book Now"
      //  button.setAttribute=("class","book_now")
      //  button.addEventListener("click",function(){
      //    apppenda(el)
      //  })
       div.append(image,Title,year)
       document.querySelector("#movie").append(div)
     })

