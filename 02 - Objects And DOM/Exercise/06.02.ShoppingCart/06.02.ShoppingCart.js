function shoppingCart() {
    let addButtons = document.getElementsByClassName("add-product");

    let textArea = document.getElementsByTagName("textarea")[0];

    let listWithProducts = [];

    let totalPrice = 0;

    for (let currentAddButton = 0; currentAddButton < addButtons.length; currentAddButton++) {
        addButtons[currentAddButton].addEventListener("click", addProduct);
    }

    function addProduct(event) {
        let currentProduct = event.target.parentElement.parentElement;
        let productName = currentProduct.querySelector("div.product-details div.product-title").innerHTML;
        let productPrice = Number(currentProduct.querySelector("div.product-line-price").innerHTML);

        textArea.innerHTML += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

        if (!listWithProducts.includes(productName)) {
            listWithProducts.push(productName);
        }

        totalPrice += productPrice;
    }

    let checkoutButton = document.getElementsByClassName("checkout")[0];
    checkoutButton.addEventListener("click", checkout);

    function checkout(event) {
        textArea.innerHTML += `You bought ${listWithProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;
        event.target.disabled = true;

        for (let i = 0; i < addButtons.length; i++) {
            addButtons[i].disabled = true;
        }
    }
}