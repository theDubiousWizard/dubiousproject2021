let stats = document.getElementById('statsView');

//player stats
{
    Day = 0
    Time = 24 //out of 24*4 = 92

    Level = 1
    Exp = 0
    Money = 0

    Hp = 100
    Fat = 0
    L = 0
    maxHp = 100
    maxFat = 100
    maxL = 100

    str = 20
    spd = 20
    end = 20
    int = 20
    sense = 20
    lib = 20
    corr = 20
}

function run(){
    updateStats()
}


function start(){
    run()
}
function updateStats(){

    stats.innerHTML = 'Day: ' + Day + '<br>'
    stats.innerHTML += 'Time: ' + (Time/4) + ":"
    addMinutes()
    stats.innerHTML += '<br>'
    stats.innerHTML += '<br>'
    stats.innerHTML += '<b>Advancement Stats</b>' + '<br>'
    stats.innerHTML += 'Level: ' + '<br>'
    stats.innerHTML += 'Exp: ' + '<br>'
    stats.innerHTML += 'Money: ' + '<br>'
    stats.innerHTML += '<br>'
    stats.innerHTML += '<b>Condition Stats</b>' + '<br>'
    stats.innerHTML += 'Health: '+ Hp + '/' + maxHp + '<br>'
    stats.innerHTML += 'Fatigue: ' + Fat + '/' + maxFat + '<br>'
    stats.innerHTML += 'L: ' + L + '/' + maxL +'<br>'
    stats.innerHTML += '<br>'
    stats.innerHTML += '<b>Core Stats</b>' + '<br>'
    stats.innerHTML += 'Strength: ' + str + '<br>'
    stats.innerHTML += 'Speed:    ' + spd + '<br>'
    stats.innerHTML += 'Endurance:  ' + ' ' + end + '<br>'
    stats.innerHTML += 'Intelligence: ' + int +  '<br>'
    stats.innerHTML += 'Sensitivity:  ' + sense + '<br>'
    stats.innerHTML += 'Liberty: ' + lib + '<br>'
    stats.innerHTML += 'Corruption: ' + corr + '<br>'
    stats.innerHTML += '<br>'

}
function addMinutes(){
    var tempTime = Time
    while(tempTime >= 1){
        tempTime -= 1
    }
    if(tempTime == 0.25) {
        stats.innerText += '15'
    }else if(tempTime == 0.5){

        stats.innerText += '30'
    }else if(tempTime == 0.75){

        stats.innerText += '45'
    }else if(tempTime == 0){

        stats.innerText += '00'
    }else{

        stats.innerText += '??'
    }
}

