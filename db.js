// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBY3gM5vuJSTw9l15oCg91eTVNCMOeqL9M",
    authDomain: "viaduct-897a8.firebaseapp.com",
    databaseURL: "https://viaduct-897a8-default-rtdb.firebaseio.com",
    projectId: "viaduct-897a8",
    storageBucket: "viaduct-897a8.appspot.com",
    messagingSenderId: "481777094986",
    appId: "1:481777094986:web:350ed7391fe1e67fa171b3",
    measurementId: "G-M3NHT0695C"
  };
  
firebase.initializeApp(firebaseConfig);
  
// Reference messages collection
var database = firebase.database();

  
// Listen for form submit
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values
    var studName = document.getElementById("name").value;
    var rollNo = document.getElementById("rollNo").value;
    var email = document.getElementById("email").value;
    var cgpa = document.getElementById("cgpa").value;
    var semester = document.getElementById("semester").value;
    var matricNum = document.getElementById("matricNum").value;
    var interNum = document.getElementById("interNum").value;
    var itcNum = document.getElementById("itcNum").value;
    var pfNum = document.getElementById("pfNum").value;
    var pfLabNum = document.getElementById("pfLabNum").value;
    var oopNum = document.getElementById("oopNum").value;
    var oopLabNum = document.getElementById("oopLabNum").value;
    var dsaNum = document.getElementById("dsaNum").value;
    var dsaLabNum = document.getElementById("dsaLabNum").value;
    var algoNum = document.getElementById("algoNum").value;
    var dbNum = document.getElementById("dbNum").value;
    var dbLabNum = document.getElementById("dbLab").value;
    var webNum = document.getElementById("webNum").value;
    var webLabNum = document.getElementById("webLab").value;
    var gender = document.getElementById("male");
    var interests = document.getElementById("paragraph").value;
    if(!gender.checked)
    {
        gender = document.getElementById("female");
        if(!gender.checked)
        {
            gender = document.getElementById("none");
        }
    }
    var degree = document.getElementById("CS");
    if(!degree.checked)
    {
        degree = document.getElementById("IT");
        if(!degree.checked)
        {
            degree = document.getElementById("SE");
            if(!degree.checked)
            {
                degree = document.getElementById("DS");
            }
        }
    }

    var skillUL = document.getElementById("skillList");
    var skills = skillUL.getElementsByTagName("li");
    let skillList = []; 
    // Loop through the list of skills
    for (var i = 0; i < skills.length; i++) {
        const arr = skills[i].textContent.split(',');
        var str = arr[0]+','+arr[1];
        //Make the list of string of skills
        skillList.push(str);
    }

    var projectUL = document.getElementById("projectList");
    var projects = projectUL.getElementsByTagName("li");
    let projectList = []; 
    // Loop through the list of project
    for (var i = 0; i < projects.length; i++) {
        const arr = projects[i].textContent.split(',');
        var str = arr[0] + ',' + arr[1] + ',' + arr[2] + ',' + arr[3];
        //Make the list of string of projects
        projectList.push(str);
    }
    
    var taUL = document.getElementById("tAList");
    var taShips = taUL.getElementsByTagName("li");
    let taList = []; 
    // Loop through the list of taShip
    for (var i = 0; i < taShips.length; i++) {
        const arr = taShips[i].textContent.split(',');
        var str = arr[0] + ',' + arr[1];
        //Make the list of string of taShip
        taList.push(str);
    }

    var internUL = document.getElementById("internShipList");
    var internShips = internUL.getElementsByTagName("li");
    let internShipList = []; 
    // Loop through the list of internShips
    for (var i = 0; i < internShips.length; i++) {
        const arr = internShips[i].textContent.split(',');
        var str = arr[0] + ',' + arr[1];
        //Make the list of string of internShip
        internShipList.push(str);
    }
    
    const newPostRef = database.ref('student').push({
        name: studName,
        rollNo: rollNo,
        email: email,
        cgpa: cgpa,
        semester: semester,
        matricNum: matricNum,
        interNum: interNum,
        itcNum: itcNum,
        pfNum: pfNum,
        pfLabNum: pfLabNum,
        oopNum: oopNum,
        oopLabNum: oopLabNum,
        dsaNum: dsaNum,
        dsaLabNum: dsaLabNum,
        algoNum: algoNum,
        dbNum: dbNum,
        dbLabNum: dbLabNum,
        webNum: webNum,
        webLabNum: webLabNum,
        gender: gender.value,
        degree: degree.value,
        skills: skillList,
        projects: projectList,
        taShips: taList,
        internShips: internShipList,
        interests: interests
    });

   



});


  

  


    
  

  


  