var checkedTp = document.getElementById("sixth");
var checkedtShirt = document.getElementById("seventh");
var checkedHoodie = document.getElementById("eight");
var checkedBoth = document.getElementById("eighted");
var toTal = document.getElementById("total");
var partyNumber = document.getElementById("partyNumber");
var tourPackage = document.getElementById("tourPackage");
var roundTrip = document.getElementById("roundTrip");
var tShirtsPrice = document.getElementById("tShirtsPrice");
var hoodiesPrice = document.getElementById("hoodiesPrice");
var bothPrice = document.getElementById("bothPrice");
var times = document.getElementsByName("times");

var tp = 150;
var tShirt = 35;
var hoodie = 65;
var both = 90;
var total = 150;

partyNumber.addEventListener("change", value);
checkedTp.addEventListener("change", check);
checkedtShirt.addEventListener("change", checkTshirt);
checkedHoodie.addEventListener("change", checkHoodie);
checkedBoth.addEventListener("change", checkBoth);

function value() {
  var tot = 150;
  var ts = 35;
  var h = 65;
  var t = 150;
  var b = 90;
  tp = t * this.value;
  tShirt = ts * this.value;
  hoodie = h * this.value;
  both = b * this.value;
  total = tot * this.value;
  console.log(tp, tShirt, hoodie, total);
  tourPackage.innerHTML = `$${total}`;
  toTal.innerHTML = `$${total}`;
  times[0].innerHTML = `(x${this.value})`;
  times[1].innerHTML = `(x${this.value})`;
  times[2].innerHTML = `(x${this.value})`;
  times[3].innerHTML = `(x${this.value})`;
  times[4].innerHTML = `(x${this.value})`;
}

function check() {
  if (this.checked == true) {
    total = total += tp;
    toTal.innerHTML = `$${total}`;
    roundTrip.innerHTML = `$${tp}`;
    console.log(total);
  } else {
    total = total -= tp;
    toTal.innerHTML = `$${total}`;
    roundTrip.innerHTML = `$${0}`;
    console.log(total);
    console.log("Unchecked");
  }
}

function checkTshirt() {
  if (this.checked == true) {
    total = total += tShirt;
    toTal.innerHTML = `$${total}`;
    tShirtsPrice.innerHTML = `$${tShirt}`;
    console.log(total);
  } else {
    total = total -= tShirt;
    toTal.innerHTML = `$${total}`;
    tShirtsPrice.innerHTML = `$${0}`;
    console.log(total);
    console.log("Unchecked");
  }
}
function checkHoodie() {
  if (this.checked == true) {
    total = total += hoodie;
    toTal.innerHTML = `$${total}`;
    hoodiesPrice.innerHTML = `$${hoodie}`;
    console.log(total);
  } else {
    total = total -= hoodie;
    toTal.innerHTML = `$${total}`;
    hoodiesPrice.innerHTML = `$${0}`;
    console.log(total);
    console.log("Unchecked");
  }
}
function checkBoth() {
  if (this.checked == true) {
    total = total += both;
    toTal.innerHTML = `$${total}`;
    bothPrice.innerHTML = `$${both}`;
    console.log(total);
  } else {
    total = total -= both;
    toTal.innerHTML = `$${total}`;
    bothPrice.innerHTML = `$${0}`;
    console.log(total);
    console.log("Unchecked");
  }
}
