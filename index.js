var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").innerHTML = "Submit";
    document
      .getElementById("nextBtn")
      .addEventListener("click", function alert() {
        const success = document.getElementById("success");

        success.style.display = "block";
      });
  } else if (n == x.length - 2) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").preventDefault();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields

  var x, y, i, email, validRegex;
  valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  console.log(y);
  validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // email = document.getElementById("myEmail");

  // if (!email.value.match(validRegex)) {
  //   alert("Invalid email address!");
  //   window.location.reload();
  // }
  // A loop that checks every input field in the current tab:

  // If a field is empty...
  if (y[0].value == "") {
    // add an "invalid" class to the field:
    y[0].className += " invalid";
    // and set the current valid status to false
    valid = false;
  }
  if (y[1].value == "") {
    // add an "invalid" class to the field:
    y[1].className += " invalid";
    // and set the current valid status to false
    valid = false;
  }
  if (y[2].value == "") {
    // add an "invalid" class to the field:
    y[2].className += " invalid";
    // and set the current valid status to false
    valid = false;
  }
  if (y[3].value == "") {
    // add an "invalid" class to the field:
    y[3].className += " invalid";
    // and set the current valid status to false
    valid = false;
  }
  if (y[4].value == "") {
    // add an "invalid" class to the field:
    y[4].className += " invalid";
    // and set the current valid status to false
    valid = false;
  }

  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
