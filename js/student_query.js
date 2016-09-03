var student;
var allstudents =[];
var as;
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

while (true) {
  var message = '';
  search = prompt("Search for a student. Type 'list' to show all of the students and 'quit' to exit");
  if (search === null|| search.toLowerCase() === 'quit' || search === 'exit') {
    break;
  } else if ( search === 'list') {
    for (var i = 0; i < students.length; i += 1) {
      student = students[i]
      message += '<h2>Student: ' + student.name + '</h2>';
    }
    print(message);
  } else {
     for (var i = 0; i < students.length; i += 1) {
      student = students[i]
      allstudents.push(student.name);
      as = allstudents.indexOf( search );
       if ( as > -1 ) {
         message =  '<h2>Student: ' + students[as].name + '</h2>';
         message += '<p>Track: ' + students[as].track + '</p>';
         message += '<p>Points: ' + students[as].points + '</p>';
         message += '<p>Achievements: ' + students[as].achievements + '</p>';
      } else {
        message = search + ' is not a student at this establishment.';
      }
       
     }
    print(message);
    
  }
}