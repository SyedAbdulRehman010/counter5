console.log('hello')
var clicks = 0;
function counter(){
  
    clicks += 1;
    document.getElementById("cnt").innerHTML = clicks;
}
function minus(){
  
    clicks -= 1;
    document.getElementById("cnt").innerHTML = clicks;}

    function reset(){
  
        clicks = 0;
        document.getElementById("cnt").innerHTML = clicks;}