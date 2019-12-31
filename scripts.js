window.onload = () => start()

const start = () => {
    setInterval(() => {
        const d = new Date();
        const hour = d.getHours()
        const minutes = d.getMinutes()
        const seconds = d.getSeconds()

        //Seconds 
        const secSpan = document.getElementById('sec')
        secSpan.style.transform = `rotate(${seconds*6}deg)`
        
        /* const h = document.getElementById('h').innerHTML = hour+':'
        const m = document.getElementById('m').innerHTML = minutes+':'
        const s = document.getElementById('s').innerHTML = seconds*/


        //Minutes
        const minSpan = document.getElementById('min')
        minSpan.style.transform = `rotate(${minutes*6+seconds/10}deg)`

        //Hours
        const hrSpan = document.getElementById('hr')
        hrSpan.style.transform = `rotate(${hour*30+minutes/2}deg)`

    },1000)
}
