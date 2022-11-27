var base = [];
let user = document.querySelector(".user");
let phone = document.querySelector(".phone");
let address = document.querySelector(".address");
let select = document.querySelector("#select");
let input = document.querySelectorAll(".input");
let coin;


let radioValue = input.forEach((e) => {
  e.addEventListener('click', function (e) {
    coin = e.target.value
  })
})
let btn = document.querySelector('#submit');
btn.addEventListener('click', function () {
  console.log(coin);
})

console.log(coin);
let check1 = document.querySelectorAll(".check1")
let check2 = document.querySelectorAll(".check2");
let checkBase1 = []
let checkBase2 = []
let checkPrice = []
function checkV1(e) {
  checkPrice.push(e.target.dataset.price)
  console.log(checkPrice);
  if (e.target.checked == true) {
    checkBase1.push(e.target.id)
    console.log(checkBase1);
  } else {
    checkBase1 = checkBase1.filter((item) => item !== e.target.id)
    console.log(checkBase1);

  }
}
check1.forEach((e) => {
  e.addEventListener('change', checkV1)
})
function checkV2(e) {
  checkPrice.push(e.target.dataset.price)
  console.log(checkPrice);
  if (e.target.checked == true) {
    checkBase2.push(e.target.id)
    console.log(checkBase2);
  } else {
    checkBase2 = checkBase2.filter((item) => item !== e.target.id)
    console.log(checkBase2);

  }
}
check2.forEach((e) => {
  e.addEventListener('change', checkV2)
})

btn.addEventListener('click', function () {
  var price=checkPrice.reduce((a,b)=>{
    return a*1+b*1
  },0)
  var addnew = {
    name: user.value,
    phone: phone.value,
    address: address.value,
    select: select.value,
    radio: coin,
    check1: checkBase1,
    check2: checkBase2,
    price:price

  }
  base.push(addnew)
  base.forEach(function (e) {
  
    console.log(price);
    console.log(checkPrice);
    let card = document.querySelector('.carrd');
    card.innerHTML += `
  <div class="card-body">
              <h5 class="card-title">Order: ${base.length}</h5>
              <p class="card-text"><b>Name:</b> ${e.name}</p>
              <p class="card-text"><b>Phone:</b> ${e.phone}</p>
              <p class="card-text"><b>Address:</b> ${e.address}</p> 
              <hr>
              <p class="card-text"><b>Dough thickness:</b> ${e.select}</p>
              <p class="card-text"><b>Size:</b> ${e.radio}</p>
              <p class="card-text"><b>On Pizza:</b> ${e.check1.map((t) => { return t })} </p>
              <p class="card-text"><b>ADD:</b>${e.check2.map((t) => { return t })} </p>
              <hr>
              <span><b>Total:</b> ${e.price}$</span>

            </div>
  `
  })
})


