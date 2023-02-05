//----------------- Product search box --------------//
const search = () => {
    const searchText = document.getElementById("search").value;
    const productDivs = document.querySelectorAll(".product");

    productDivs.forEach((productDiv) => {
        let productName = productDiv.querySelectorAll(".shop-item-title")[0].textContent;

        if (productName.toUpperCase().indexOf(searchText.toUpperCase()) > -1) {
            productDiv.style.display = "";
        }
        else {
            productDiv.style.display = "none";
        }

    });
}
//----------------- Product search box --------------//