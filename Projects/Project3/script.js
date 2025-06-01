const time = document.getElementById('clock')




setInterval(function displayTime(){
    const date = new Date().toLocaleTimeString('en-IN',{hour12:false})
    time.innerHTML = date
},1000)

