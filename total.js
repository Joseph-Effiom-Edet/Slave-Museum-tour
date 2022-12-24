var checkedTp = document.getElementById("sixth");
var checkedtShirt = document.getElementById("seventh");
var checkedHoodie = document.getElementById("eight");
var toTal = document.getElementById("total");
var partyNumber = document.getElementById("partyNumber");
var tourPackage = document.getElementById("tourPackage");
var roundTrip = document.getElementById("roundTrip");
var tShirtsPrice = document.getElementById("tShirtsPrice");
var hoodiesPrice = document.getElementById("hoodiesPrice");
var times = document.getElementsByName("times");

var tp = 150;
var tShirt = 35;
var hoodie = 65;
var total = 125;

partyNumber.addEventListener("change", value);
checkedTp.addEventListener("change", check);
checkedtShirt.addEventListener("change", checkTshirt);
checkedHoodie.addEventListener("change", checkHoodie);

function value() {
  total = total *= this.value;
  tp = tp *= this.value;
  tShirt = tShirt *= this.value;
  hoodie = hoodie *= this.value;
  console.log(tp, tShirt, hoodie, total);
  tourPackage.innerHTML = `$${total}`;
  toTal.innerHTML = `$${total}`;
  times[0].innerHTML = `(x${this.value})`;
  times[1].innerHTML = `(x${this.value})`;
  times[2].innerHTML = `(x${this.value})`;
  times[3].innerHTML = `(x${this.value})`;
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
