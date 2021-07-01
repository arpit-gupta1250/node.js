function calculateSquare(n, cb){
    setTimeout(() => {
        cb(n*n);
    }, 0)
}
calculateSquare(5, function(res){
    console.log(res)
});