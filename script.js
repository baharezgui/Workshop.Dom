var plus = document.querySelectorAll(".plus")
var mins = document.querySelectorAll(".mins")
var qty = document.querySelectorAll(".qty")
var price = document.querySelectorAll(".price")
var total_price = document.querySelector("#total-price")
var deleteItem = document.querySelectorAll(".bi-trash3")
var like = document.querySelectorAll(".bi-heart-fill")

console.log(deleteItem)
// Initial Total Price 
function calcTotal() {
    var qty = document.querySelectorAll(".qty")
    var price = document.querySelectorAll(".price")
    var total = 0;
    qty.forEach(function (quantity, i) {
        total += parseInt(quantity.innerHTML) * parseInt(price[i].innerHTML)
        console.log(quantity)
    })
    total_price.innerHTML = total
}
calcTotal()



// for (let i = 0; i < plus.length; i++) {

//     plus[i].addEventListener("click", function () {
//         qty[i].innerHTML = parseInt(qty[i].innerHTML) + 1
//     })

// }

plus.forEach(function (item, i) {
    item.addEventListener("click", function () {
        qty[i].innerHTML = parseInt(qty[i].innerHTML) + 1
        calcTotal()


    })
})
mins.forEach(function (item, i) {
    item.addEventListener("click", function () {
        if (parseInt(qty[i].innerHTML) === 1) {
            return false
        } else {

            qty[i].innerHTML = parseInt(qty[i].innerHTML) - 1
            calcTotal()
        }
    })
})
deleteItem.forEach(function (deleteBtn, i) {
    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentNode.parentNode.remove()
        calcTotal()
    })
})

like.forEach(function (likeBtn) {
    likeBtn.addEventListener("click", function () {
        if (likeBtn.style.color === "red") {
            likeBtn.style.color = ""
        } else {

            likeBtn.style.color = "red"
        }
    })
})
// console.log(price)