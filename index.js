var on= document.querySelector("#on")
  var bulb =document.querySelector("#bulb")
  var off= document.querySelector("#off")

on.addEventListener("click",function(){
    on.style.backgroundColor="grey"
    off.style.backgroundColor="red"
})
    

off.addEventListener("click",function(){
    bulb.style.backgroundColor="transparent"
    on.style.backgroundColor="green"
    off.style.backgroundColor="grey"
    green.style.backgroundColor="green"
    blue.style.backgroundColor="blue"
    pink.style.backgroundColor="pink"
    yellow.style.backgroundColor="yellow"
    red.style.backgroundColor="red"
    
})


var green= document.querySelector(".green")
green.addEventListener("click",function(){
    bulb.style.backgroundColor="green"
    on.style.backgroundColor="grey"
    off.style.backgroundColor="red"
    green.style.backgroundColor="grey"
    blue.style.backgroundColor="blue"
    pink.style.backgroundColor="pink"
    yellow.style.backgroundColor="yellow"
    red.style.backgroundColor="red"
    
    
})

 var blue =document.querySelector(".blue")
 blue.addEventListener("click",function(){
    blue.style.backgroundColor="grey"
    bulb.style.backgroundColor="blue"
    on.style.backgroundColor="grey"
    off.style.backgroundColor="red"
    green.style.backgroundColor="green"
    pink.style.backgroundColor="pink"
    yellow.style.backgroundColor="yellow"
    red.style.backgroundColor="red"
    
 })
 var pink= document.querySelector(".pink")
 pink.addEventListener("click",function(){
    pink.style.backgroundColor="grey"
    bulb.style.backgroundColor="pink"
    on.style.backgroundColor="grey"
    off.style.backgroundColor="red"
    green.style.backgroundColor="green"
    blue.style.backgroundColor="blue"
    yellow.style.backgroundColor="yellow"
    red.style.backgroundColor="red"
 })
 var yellow = document.querySelector(".yellow")
 yellow.addEventListener("click",function(){
    bulb.style.backgroundColor="yellow"
    yellow.style.backgroundColor="grey"
    on.style.backgroundColor="grey"
    off.style.backgroundColor="red"
    green.style.backgroundColor="green"
    blue.style.backgroundColor="blue"
    pink.style.backgroundColor="pink"
    red.style.backgroundColor="red"
    
    
 })
  var red= document.querySelector(".red")
  red.addEventListener("click",function(){
    bulb.style.backgroundColor="red"
    on.style.backgroundColor="grey"
    off.style.backgroundColor="red"
    red.style.backgroundColor="grey"
    green.style.backgroundColor="green"
    blue.style.backgroundColor="blue"
    pink.style.backgroundColor="pink"
    yellow.style.backgroundColor="yellow"
  })

