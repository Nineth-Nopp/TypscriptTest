function getClockAngle(hh_mm:string):number {
    let resultAngle:number = 0
    let [hour,minute] = hh_mm.split(':');
    let minutes = parseInt(minute)
    let hours = parseInt(hour)

    if (hours>=12){
        hours = hours % 12
    }

    let minuteAngle = minutes*6 
    let hourAngle = hours*30 + minutes*0.5

    let angleDiff = Math.abs(minuteAngle-hourAngle) 

    resultAngle = Math.min(angleDiff,360-angleDiff)
    
    return resultAngle
    }

   let result:number = getClockAngle("09:00")

    console.log(result)
