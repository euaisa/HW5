const search = () => {
    const searchbox = document.getElementById("search").value.toUpperCase();
    const storeitems = document.getElementsByClassName("product-list")
    const product = document.querySelectorAll(".product")
    const pname = storeitems.getElementsByTagName("h4")

    for(var i=0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h4')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML
                let textvalue: string

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }

        }
    }

}