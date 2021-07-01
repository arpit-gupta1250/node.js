function time(){
  setTimeout(() => {
    console.log("SET TIMEOUT")
  }, 1000);
}

function timeInterval(){
  setInterval(() => {
    console.log("SET INTERVAL")
  }, 2000)
}

time()
timeInterval()