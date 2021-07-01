function x(cb){
  setTimeout(() => {
    console.log("X");
    cb();
  }, 1000);
}

// pyramid of doom or callback hell
x(function(){
  console.log("Y-1");
  x(function(){
    console.log("Y-2");
    x(function(){
      console.log("Y-3");
      x(function(){
        console.log("Y-4");
      });
    });
  });
});