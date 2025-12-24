



let deadLineDate = "30 December 2025"

const timeCalculation =()=>{
     let deadlineEnd = new Date(deadLineDate)
     let curretDate = new Date()
     let totalTime = (deadlineEnd -curretDate)/1000      // mili second to second
     let days = Math.floor((totalTime/(60*60*24)))
     let hours = Math.floor((totalTime%(60*60*24))/3600)
     let minutes = Math.floor((totalTime%(60*60))/60)
     let seconds = Math.floor(totalTime % 60)
    document.getElementById("day").innerText = days
    document.getElementById("hour").innerText = hours
    document.getElementById("min").innerText = minutes
    document.getElementById("second").innerText = seconds
     
}

timeCalculation()
setInterval(timeCalculation ,1000)