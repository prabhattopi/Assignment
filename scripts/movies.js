// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount=JSON.parse(localStorage.getItem("amount"))
let length=amount.reduce(function(sum,el,i){
  return sum+Number(el)
},0)

// document.querySelector(".")
document.querySelector('#wallet').innerText=length


async function searchMovies(){
  let valu=document.querySelector("input").value
  let d1=await fetch(`https://www.omdbapi.com/?s=${valu}&apikey=da3af64a&page=1`)
  let data=await d1.json()
   return data.Search
}
let Data=JSON.parse(localStorage.getItem("movie"))||[]
function DisplayData(data){
  document.querySelector("#movies").innerHTML=null
   data.map(function(el,i,arr){
     let div=document.createElement("div")
     let image=document.createElement("img")
     image.src=el.Poster
     let Title=document.createElement("p")
     Title.innerText=el.Title
     let year=document.createElement("p")
     year.innerText=el.Year
     let button=document.createElement("button")
     button.innerText="Book Now"
     button.setAttribute=("class","book_now")
     button.addEventListener("click",function(){
       apppenda(el)
     })
     div.append(image,Title,year,button)
     document.querySelector("#movies").append(div)
   })

 }
 function apppenda(el){
   Data.push(el)
   localStorage.setItem("movie",JSON.stringify(Data))
   window.location.href="../checkout.html"

 }
async function findMovies(){
   let data =await searchMovies()
   if(data==undefined){
     return false
   }
   DisplayData(data)
}
let x;
function debouc(func,time){
  if(x){
    clearTimeout(x)
  }
 
    x=setTimeout(() => {
      func()
    }, time);
 
}

// async function findMovies()

//https://www.omdbapi.com/?i=tt3896198&apikey=da3af64a&t=${value}
