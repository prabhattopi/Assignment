// Store the wallet amount to your local storage with key "amount"
function chalo2(){
    window.location.href="../movies.html"
  }
   
   
   let Data=JSON.parse(localStorage.getItem("amount"))||[]
   
  // let h1=
  // let 
  // h1.innerText=Number(value)+Number(localStorage.getItem("amount"))
  // document.querySelector("#add-money").append(h1)

  function chalo(){
    let value=document.getElementById("amount").value
  
      Data.push(value)
    // let Data=JSON.parse(localStorage.getItem("amount"))||[]
    // Data.push(value)
    localStorage.setItem("amount",JSON.stringify(Data))
    console.log(Data)
    cha()
   

 
 
  }
  let length=Data.reduce(function(sum,el,i){
    return sum+Number(el)
  },0)
//   let h1=document.createElement("h1")
//   h1.setAttribute("id","wallet")
  document.querySelector("#wallet").innerText=length
  // document.querySelector(".")
//   document.querySelector("#navbar").append(h1)
  function cha(){
    document.querySelector("#wallet").innerText=null
    let length=Data.reduce(function(sum,el,i){
    return sum+Number(el)
  },0)
//   let h1=document.createElement("h1")
//   h1.setAttribute("id","wallet")
  document.querySelector("#wallet").innerText=length
  // document.querySelector(".")
  // document.querySelector("#navbar h1:nth-child(2)").innerHTML=null
  document.querySelector("#wallet").innerText=length
}
