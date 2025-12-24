
let mac = document.getElementById("mac")
let macRemove = document.getElementById("macRemove")
let macAdd = document.getElementById("macAdd")
let macPrice = document.getElementById("macPrice")
// phone 
let phone = document.getElementById("phone")
let phoneRemove = document.getElementById("phoneRemove")
let phoneAdd = document.getElementById("phoneAdd")
let phonePrice = document.getElementById("phonePrice")
//total
let subTotal = document.getElementById("subTotal")
let tax  = document.getElementById("tax")
let grandToal = document.getElementById("grandTotal")

let mainPrice =0
macAdd.addEventListener("click",(e)=>{
   let currentValue = Number(mac.value)
   mac.value = currentValue+1
   let price = mac.value* 120
   macPrice.innerText = `$ ${price}`
   mainPrice+=120
   subTotal.innerText = `$ ${mainPrice}`
   tax.innerText = `$ ${mainPrice*0.1}`
   let gradprice = mainPrice +(mainPrice*0.1)
   grandToal.innerText =`$ ${gradprice}`

})
macRemove.addEventListener("click",(e)=>{
   let currentValue = Number(mac.value)
   if(currentValue !=0){
        mac.value = currentValue -1
        let price = mac.value* 120
        macPrice.innerText = `$ ${price}`
        mainPrice -=120
        subTotal.innerText = `$ ${mainPrice}`
        tax.innerText = `$ ${mainPrice*0.1}`
        let gradprice =mainPrice + (mainPrice * 0.1)
        grandToal.innerText =`$ ${gradprice}`
   }
})

// phone
phoneAdd.addEventListener("click",(e)=>{
   let currentValue = Number(phone.value)
   phone.value = currentValue+1
   let price = phone.value* 60
   phonePrice.innerText = `$ ${price}`
   mainPrice+=60
   subTotal.innerText = `$ ${mainPrice}`
   tax.innerText = `$ ${mainPrice*0.1}`
   let gradprice = mainPrice +(mainPrice*0.1)
   grandToal.innerText =`$ ${gradprice}`

})

phoneRemove.addEventListener("click",(e)=>{
   let currentValue = Number(phone.value)
   if(currentValue !=0){
        phone.value = currentValue -1
        let price = phone.value* 60
        macPrice.innerText = `$ ${price}`
        mainPrice -=60
        subTotal.innerText = `$ ${mainPrice}`
        tax.innerText = `$ ${mainPrice*0.1}`
        let gradprice =mainPrice + (mainPrice * 0.1)
        grandToal.innerText =`$ ${gradprice}`

   
   }
})