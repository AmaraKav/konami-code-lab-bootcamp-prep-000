const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var chose = document.querySelector('body');
  var empArr = [];
  chose.addEventListener('keydown', function(event){
    var x = (event.which || event.keyCode);
    for (var i = 0; i < empArr.length; i++){
      empArr.push(x[i]);
    }
  });
}
