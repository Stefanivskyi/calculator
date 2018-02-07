
// Вартість - а
// Вага - b
// Мито - m
// ПДФ - p
function refreshOutputPlane() {

  var Plane = document.querySelector('input[value="plane-check"]');
  var PlaneFirstTime = document.querySelector('input[value="plane-first-time-check"]')
 
  var a = document.getElementById('input-euro-plane').value;
    
  if (Plane.checked == true) {
    $('#hide-plane').hide();
    $('#show-plane').show();
    if (a <= 1000 && PlaneFirstTime.checked == true) {
      m = 0;
      p = 0;
      var summ = (m + p);
      document.getElementById('out-plane').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
    }
    else if (a > 1000 && PlaneFirstTime.checked == true) {
      m = (a - 1000) * 0.1;
      p = (a - 1000 + m) * 0.2;
      var summ = (m + p);
      document.getElementById('out-plane').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
    }
    else if (a >= 0 && PlaneFirstTime.checked == false) {
      m = a * 0.1;
      p = (+a + m) * 0.2;
      var summ = (m + p);
      document.getElementById('out-plane').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
      console.log("p =", p);
      console.log("summ =", summ);
      console.log("a", typeof a);
      console.log("m", typeof m);
      console.log("p", typeof p);
      console.log("summ", typeof summ);
    }
  }
  if (Plane.checked == false) {
    $('#hide-plane').show();
    $('#show-plane').hide();
  }
}
 
function refreshOutput() {
 
  var Plane = document.querySelector('input[value="plane-check"]');
  var FirstTime = document.querySelector('input[value="first-time-check"]');
  var ThreeDay = document.querySelector('input[value="72-check"]');

  var a = document.getElementById('input-euro').value;
  var b = document.getElementById('input-weight').value;
 
 
  if (a <= 500 && b <= 50 && FirstTime.checked == true && ThreeDay.checked == true) {
    m = 0;
    p = 0;
    var summ = (m + p);
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }
  else if (a > 500 && b <= 50 && FirstTime.checked == true && ThreeDay.checked == true) {
    m = (a - 500) * 0.1;
    p = (a - 500 + m) * 0.2;
    var summ = (m + p);
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }
  else if (a <= 500 && b > 50 && FirstTime.checked == true && ThreeDay.checked == true ) {
    m = (a / b) * (b - 50) * 0.1;
    p = (a / b) * (b - 50) * 0.2;
    var summ = (m + p);
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }
  else if (a > 500 && b > 50 && FirstTime.checked == true && ThreeDay.checked == true) {
    m1 = (a - 500) * 0.1;
    p1 = (a - 500 + m1) * 0.2;
  
    m2 = (a / b) * (b - 50) * 0.1;
    p2 = (a / b) * (b - 50) * 0.2;
    
    var m3 = Math.max(m1, m2);
    var p3 = Math.max(p1, p2) * 0.2;
    console.log(m3);
    console.log(p3);
    var summ = (m3 + p3);
    m = m3;
    p = p3;
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }

  else if (a <= 50 && b <= 50 && FirstTime.checked == false && ThreeDay.checked == false) {
    m = a * 0.1;
    p = 0;
    var summ = (m + p);
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }
  else if (a > 50 && b <= 50 && FirstTime.checked == false && ThreeDay.checked == false) {
    m = a * 0.1;
    p = (a - 50 + m) * 0.2;
    var summ = (m + p);
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }
  else if (a <= 50 && b > 50 && FirstTime.checked == false && ThreeDay.checked == false) {
    m = a * 0.1;
    p = (a / b) * (b - 50) * 0.2;
    var summ = (m + p);
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }
  else if (a > 50 && b > 50 && FirstTime.checked == false && ThreeDay.checked == false) {
    m1 = a * 0.1;
    p1 = (a - 50 + m1) * 0.2;

    m2 = a * 0.1;
    p2 = (a / b) * (b - 50) * 0.2;

    var m3 = m1;
    var p3 = Math.max(p1, p2) * 0.2;
    var summ = (m3 + p3);
    m = m3;
    p = p3;
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }
 
  else if (a <= 50 && b <= 50 && FirstTime.checked == true && ThreeDay.checked == false) {
    m = 0;
    p = 0;
    var summ = (m + p);
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }
  else if (a > 50 && b <= 50 && FirstTime.checked == true && ThreeDay.checked == false) {
    m = (a - 50) * 0.1;
    p = (a - 50 + m) * 0.2;
    var summ = (m + p);
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }
  else if (a <= 50 && b > 50 && FirstTime.checked == true && ThreeDay.checked == false) {
    m = (a / b) * (b - 50) * 0.1;
    p = (a / b) * (b - 50) * 0.2;
    var summ = (m + p);
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }
  else if (a > 50 && b > 50 && FirstTime.checked == true && ThreeDay.checked == false) {
    m1 = (a - 50) * 0.1;
    p1 = (a - 50 + m1) * 0.2;

    m2 = (a / b) * (b - 50) * 0.1;
    p2 = (a / b) * (b - 50) * 0.2;

    var m3 = Math.max(m1, m2);
    var p3 = Math.max(p1, p2) * 0.2;
    var summ = (m3 + p3);
    m = m3;
    p = p3;
    document.getElementById('out').innerHTML = 'Мито ' + m.toFixed(2) + '€' + ' + ПДВ ' + p.toFixed(2) + '€' + ' = ' + summ.toFixed(2) + '€';
  }else{
    document.getElementById('out').innerHTML = 'Перевірте правильність заповнених даних!';
  }
}