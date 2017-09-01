function add(a,b,c){
  return a + b + c;
 }
  btn = document.getElementById('bnt');
  btn.addEventListener('click', function(){
    var int1 = document.getElementById('first').value;
    var int2 = document.getElementById('second').value;
    var int3 = document.getElementById('third').value;
    var answer = document.getElementById('answer');
    var v1 = Number(int1);
    var v2 = Number(int2);
    var v3 = Number(int3);
    var result = add(v1,v2,v3);
    answer.value = result;

    if (answer.value <= 7){
      document.getElementById('picture').src="images/andae.jpg";
    }else if(answer.value > 7 && answer.value <= 23){
      document.getElementById('picture').src="images/taltal.png";
    }else {
        document.getElementById('picture').src="images/gae.jpg";
    }
  });