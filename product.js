let productArr = [
    { id: "1", product: "Rice(200kg)", price: 500.00 },
    { id: "2", product: "HOLLANDIA(4lrs)", price: 1000.00 },
    { id: "3", product: "DANO(2kg)", price: 450.00 },
    { id: "4", product: "OLIVE(2cm)", price: 300.00 },
    { id: "5", product: "TABLE WATER(20cl)", price: 100.00 },
    { id: "6", product: "RAMBO(300ml)", price: 1500.00 },
]
let newArr = []
let thirdArr = []
let totalArr = []
window.addEventListener("load", () => {

})

function addme() {
    group()
}
function group() {
    let item = document.getElementById("list")
    productArr.map((value, index) => {
        item.innerHTML +=
            `
            <button class="mt-1  navbar container-fluid btn btn-primary text-start" id="di${index}" onclick="addOne(${index})">
                <span class="size">${value.product}</span>
                <span class="size" id="ff$"> ${value.price}</span>                    
            </button>
                
          `
    })
}


function addOne(param) {
    newArr.push(productArr[param])

    display()
}
sum = 0;
function display() {
    document.getElementById("tcontent").innerHTML = ""
    newArr.map((value, index) => {
        document.getElementById("tcontent").innerHTML +=
            `
                    <button class="mt-1  navbar container-fluid btn btn-primary text-start">
                         <span class="pro-size" >${value.product}</span>
                        <span class="size" id="ff${index}"> ${value.price}</span>
                        <input class="size" type="number" id="me${index}" onkeyup="addu(${index})">
                         <input class="size" type="number" name="" id="you${index}" readonly>
                     </button>
            
                  `

    })

}


function addu(param) {
    // thirdArr.push(newArr[param])
        let you = document.getElementById(`ff${param}`).innerHTML
        let mult = document.getElementById(`me${param}`).value
        document.getElementById(`you${param}`).value = Number(you) * Number(mult)
        mem = document.getElementById(`you${param}`).value;
        // sum += Number(document.getElementById(`you${param}`).value)
    console.log(sum)
    // document.getElementById('result').innerHTML = `<strike>N</strike>${sum}`
}
function total(){
    newArr.map((value, index) => {

    sum += Number(document.getElementById(`you${index}`).value)
    console.log(sum)
   
    document.getElementById('result').innerHTML = sum//`<strike>N</strike>${sum}`
})

}
function next(){
    document.getElementById("amount").value = sum
}
const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_8c2bbbc0c45665138840a00331959225a7b20cfd', // Replace with your public key
    email: document.getElementById("input3").value,
    amount: document.getElementById("amount").value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      document.getElementById("myModal3").style.display ="block"
      
      
    }
  });

  handler.openIframe();
}