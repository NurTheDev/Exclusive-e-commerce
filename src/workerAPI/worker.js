onmessage = (count) => {
    let time = count.data.count
 const interval =  setInterval(() => {
     if(time <= 0){
         clearInterval(interval)
         postMessage(time)
     }
        time = time - 1000
        postMessage(time)
    }, 1000);
}
