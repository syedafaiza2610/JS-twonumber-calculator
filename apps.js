// var num1 = +prompt('Enter Your First Number')
// var num2 = +prompt('Enter Your Second Number')
// var add = num1 + num2
// var sub = num1 - num2
// var mult = num1 * num2
// var div = num1 / num2
// var mod = num1 % num2

// document.write(
//     "<table border= '1px'>"+
//     "<tr>"+
//     "<th>"+"Addition"+"</th>"
//     +"</tr>" +
//      "<tr>"+
//     "<td>"+ add + "</td>"
//     +"</tr>" +
//     "<tr>"+
//     "<th>"+"Subtraction"+"</th>"
//     +"</tr>" +
//      "<tr>"+
//     "<td>"+ sub + "</td>"
//     +"</tr>"+
//     "<tr>"+
//     "<th>"+"Multiplication"+"</th>"
//     +"</tr>" +
//      "<tr>"+
//     "<td>"+ mult + "</td>"
//     +"</tr>"+
//     "<tr>"+
//     "<th>"+"Division"+"</th>"
//     +"</tr>" +
//      "<tr>"+
//     "<td>"+ div + "</td>"
//     +"</tr>"+
//     "<tr>"+
//     "<th>"+"Modulo"+"</th>"
//     +"</tr>" +
//      "<tr>"+
//     "<td>"+ mod + "</td>"
//     +"</tr>"
//     +"</table>"
// )



//js calaculator


function work(e){
    document.getElementById('inp').value += e //field me hamesha value lagegi
   }
   function eq(){
      var a = document.getElementById('inp')
      a.value = eval(a.value)
   }
   function clr() {
    document.getElementById('inp').value=''
   }

   function clearAll() {
    var b = document.getElementById('inp');
    const currentText = inp.value;
    if (currentText.length > 0) {
      inp.value = currentText.slice(0, -1);
    }
  }
