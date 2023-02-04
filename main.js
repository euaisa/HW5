const search = () => {
    const searchbox = document.getElementById("search").ariaValueMax.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pname = storeitems.getElementsByTagName("h2")

    for(var i=0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[1].getElementsByClassName.display = "";
            }
            else {
                product[1].getElementsByClassName.display = "none";
            }

        }
    }


}