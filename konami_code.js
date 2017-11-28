const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var chose = document.querySelector('body');
  var empty = 0;
  chose.addEventListener('keydown', function(event){
    var x = parseInt(event.which || event.keyCode);
      if(code[empty] === x){
        empty++;
        if (empty === code.length){
          alert("It matches");
          empty = 0;
        }
      } else {
          empty = 0;
      }
  });
}
