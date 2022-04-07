

function displayContent(x) {
  var recievedId = x;
  var arr = ["p0", "p1", "p2", "p3"];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == recievedId) {
      document.getElementById('img' + i).style.display = 'block';
      document.getElementById('img' + i).classList.add("fadeInRight");
      document.getElementById('planet' + i).style.display = 'block';
      document.getElementById('planet' + i).classList.add("fadeInLeft");
      document.getElementById('p' + i).classList.add("active");
    } else {
      document.getElementById('img' + i).style.display = 'none';
      document.getElementById('p' + i).classList.remove("active");
      document.getElementById('planet' + i).style.display = 'none';
    }
  }

}


function displayCrewContent(y){
  var recievedID = y;
  var arr = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7"];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == recievedID){
      document.getElementById('crew' + i).style.display = 'block';
      document.getElementById('crew' + i).classList.add("fadeInLeft");
      document.getElementById('img' + i).style.display = 'block';
      document.getElementById('img' + i).classList.add("fadeInRight");
      document.getElementById('c' + i).classList.add("current");
    }else{
      document.getElementById('crew' + i).style.display = 'none';
      document.getElementById('img' + i).style.display = 'none';
      document.getElementById('c' + i).classList.remove("current");
    }
  }
}

function displayTechContent(z){
  var recievedID = z;
  var arr = ["cr0", "cr1", "cr2", "cr3", "cr4", "cr5"];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == recievedID){
      document.getElementById('t' + i).style.display = 'block';
      document.getElementById('t' + i).classList.add("fadeInBottom");
      document.getElementById('img' + i).style.display = 'block';
      document.getElementById('img' + i).classList.add("fadeInBottom");
      document.getElementById('ac' + i).classList.add("active-circle");

    }else{
      document.getElementById('t' + i).style.display = 'none';
      document.getElementById('img' + i).style.display = 'none';
      document.getElementById('ac' + i).classList.remove("active-circle");
    }
  }
}


/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("open-btn").style.display = "none";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("open-btn").style.display = "block";
}
//----------------------long-alternative--------------------------------------


// document.getElementById("p0").addEventListener("click", displayContent);
// document.getElementById("p2").addEventListener("click", displayContent);
// document.getElementById("p3").addEventListener("click", displayContent);
// document.getElementById("p1").addEventListener("click", displayContent);



// function displayContent() {
//   // var yesOrNo = document.getElementById(this.id).classList.contains('active');
//   var element1 = document.getElementById('p1').classList.contains('active');
//   var element2 = document.getElementById('p2').classList.contains('active');
//   var element3 = document.getElementById('p3').classList.contains('active');
//   var element4 = document.getElementById('p4').classList.contains('active');
//
//   switch (this.id) {
//
//     case "p1":
//       if (element4 || element2 || element3) {
//         document.getElementById('p2').classList.remove("active");
//         document.getElementById('p3').classList.remove("active");
//         document.getElementById('p4').classList.remove("active");
//       }
//       document.getElementById('planet1').style.display = 'block';
//       document.getElementById('planet2').style.display = 'none';
//       document.getElementById('planet3').style.display = 'none';
//       document.getElementById('planet4').style.display = 'none';
//       document.getElementById("img1").src = 'images/assets/destination/image-moon.png';
//       document.getElementById('p1').classList.add("active");
//       break;
//     case "p2":
//       if (element4 || element1 || element3) {
//         document.getElementById('p1').classList.remove("active");
//         document.getElementById('p3').classList.remove("active");
//         document.getElementById('p4').classList.remove("active");
//       }
//       document.getElementById('planet1').style.display = 'none';
//       document.getElementById('planet2').style.display = 'block';
//       document.getElementById('planet3').style.display = 'none';
//       document.getElementById('planet4').style.display = 'none';
//       document.getElementById("img1").src = 'images/assets/destination/image-mars.png';
//       document.getElementById('p2').classList.add("active");
//       break;
//     case "p3":
//       if (element4 || element2 || element1) {
//         document.getElementById('p2').classList.remove("active");
//         document.getElementById('p1').classList.remove("active");
//         document.getElementById('p4').classList.remove("active");
//       }
//       document.getElementById('planet1').style.display = 'none';
//       document.getElementById('planet2').style.display = 'none';
//       document.getElementById('planet3').style.display = 'block';
//       document.getElementById('planet4').style.display = 'none';
//       document.getElementById("img1").src = 'images/assets/destination/image-europa.png';
//       document.getElementById('p3').classList.add("active");
//       break;
//     case "p4":
//       if (element1 || element2 || element3) {
//         document.getElementById('p2').classList.remove("active");
//         document.getElementById('p3').classList.remove("active");
//         document.getElementById('p1').classList.remove("active");
//       }
//       document.getElementById('planet1').style.display = 'none';
//       document.getElementById('planet2').style.display = 'none';
//       document.getElementById('planet3').style.display = 'none';
//       document.getElementById('planet4').style.display = 'block';
//       document.getElementById("img1").src = 'images/assets/destination/image-titan.png';
//       document.getElementById('p4').classList.add("active");
//       break;
//   }
//
// }
//
