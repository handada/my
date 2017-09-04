function add(a,b,c) {
    return a + b + c;
}

function total() {
    var int1 = document.getElementById('first').value;
    var int2 = document.getElementById('second').value;
    var int3 = document.getElementById('third').value;
    var answer = document.getElementById('answer');
    var v1 = Number(int1);
    var v2 = Number(int2);
    var v3 = Number(int3);
    if(isNaN(v1 + v2 + v3)){
        alert("숫자만 적어 시키야");
    }else{
        answer.value=add(v1,v2,v3);
    }

    if (answer.value <= 7){
        document.getElementById('picture').src="images/andae.jpg";
    }else if(answer.value > 7 && answer.value <= 23){
        document.getElementById('picture').src="images/taltal.png";
    }else {
        document.getElementById('picture').src="images/gae.jpg";
    }
}

(function() {
    var inputTag = document.getElementsByTagName('input');
    inputTag[0].addEventListener(
        'keyup', total);
    inputTag[1].addEventListener('keyup', total);
    inputTag[2].addEventListener('keyup', total);
})();

var al = document.createElement('a');
al.id = "dkd";
al.href = "dkjdflddl.dlkdjld";
al.innerText="dkkdk"
document.querySelector('body').appendChild(al);
