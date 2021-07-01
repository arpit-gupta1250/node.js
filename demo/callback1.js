setTimeout(() => {
    console.log("timer");
  }, 0);

function x(cb){
  console.log("X");
  cb();
}

x(() => {
  console.log("Y");
})