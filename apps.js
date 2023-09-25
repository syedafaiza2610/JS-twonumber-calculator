var num1 = +prompt('Enter Your First Number')
var num2 = +prompt('Enter Your Second Number')
var add = num1 + num2
var sub = num1 - num2
var mult = num1 * num2
var div = num1 / num2
var mod = num1 % num2

document.write(
    "<table border= '1px'>"+
    "<tr>"+
    "<th>"+"Addition"+"</th>"
    +"</tr>" +
     "<tr>"+
    "<td>"+ add + "</td>"
    +"</tr>" +
    "<tr>"+
    "<th>"+"Subtraction"+"</th>"
    +"</tr>" +
     "<tr>"+
    "<td>"+ sub + "</td>"
    +"</tr>"+
    "<tr>"+
    "<th>"+"Multiplication"+"</th>"
    +"</tr>" +
     "<tr>"+
    "<td>"+ mult + "</td>"
    +"</tr>"+
    "<tr>"+
    "<th>"+"Division"+"</th>"
    +"</tr>" +
     "<tr>"+
    "<td>"+ div + "</td>"
    +"</tr>"+
    "<tr>"+
    "<th>"+"Modulo"+"</th>"
    +"</tr>" +
     "<tr>"+
    "<td>"+ mod + "</td>"
    +"</tr>"
    +"</table>"
)