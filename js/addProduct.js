import { productApi } from "../api/productApi.js";
import getValue from "../components/getValue.js";
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


const handleAddProducts = (e) => {
    e.preventDefault();

    let title = getValue("#title")
    let description = getValue("#description")
    let price = getValue("#price")
    let image = document.getElementById("image")

    console.log(title, description, price);

    let formdata = new FormData()

    formdata.append("title", title);
    formdata.append("price", price);
    formdata.append("description", description);
    formdata.append("img", image.files[0]);
    productApi.create(formdata);


    productApi.create(formdata)
}

document.getElementById("addProductForm").addEventListener("submit", handleAddProducts)