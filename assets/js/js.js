window.onload = () => {
    //saving locally
    let timer = document.getElementById('currentDay')
    const m = moment()
    console.log(m.format("L"))

    timer.innerText = m.format("L")



    setColor()
    console.log(moment().format('LT'))
    let forms = document.getElementsByClassName('form-control')
    let timesArr = JSON.parse(window.localStorage.getItem('times'))

    for (let i = 0; i < forms.length; i++) {
        if (timesArr) {
            forms[i].value = timesArr[i]
        }
    }
}

//clear button 
function clearAll() {
    window.localStorage.clear();
    let forms = document.getElementsByClassName('form-control')

    for (let i = 0; i < forms.length; i++) {
            forms[i].value = ''
    }
}
//color coding
function setColor() {
    let forms = document.getElementsByClassName('form-control')
    let calendarTimes = document.getElementsByClassName('hour')
    let currentTime = moment().format('LT')
    let redFound = false

    for (let i = 0; i < calendarTimes.length; i++) {
        let hour = calendarTimes[i].innerText.split(':')[0]
        if (hour[0] === '0' && hour[1] === currentTime[0]) {
            forms[i].style.backgroundColor = 'rgb(224, 95, 81)'
            redFound = true
            continue;
        } else if (hour === currentTime.split(':')[0]) {
            forms[i].style.backgroundColor = 'rgb(224, 95, 81)'
            redFound = true
            continue;
        }

        if(redFound){
            forms[i].style.backgroundColor = 'rgb(67, 230, 121)'
        }else{
            forms[i].style.backgroundColor = 'rgb(227,227,227)'
        }

    }
    //current date
    const m = moment()
    console.log(m.format("L"))
}
//selecting each box
function setLocal() {
    let forms = document.getElementsByClassName('form-control')
    let timesArr = []

    for (let i = 0; i < forms.length; i++) {
        timesArr.push(forms[i].value)
    }
    console.log(forms)
    window.localStorage.setItem('times', JSON.stringify(timesArr))
    console.log(JSON.parse(window.localStorage.getItem('times')))
}