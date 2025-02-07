document.addEventListener("DOMContentLoaded", loadProperties);
 
function addProperty() {
    let title = document.getElementById("title").value.trim();
    let description = document.getElementById("description").value.trim();
    let imageURL = document.getElementById("imageURL").value.trim();
    let contact = document.getElementById("contact").value.trim();
 
    if (title === "" || description === "" || imageURL === "" || contact === "") {
        alert("Please fill all fields.");
        return;
    }
 
   
    let contactRegex = /^\d{10}$/;
    if (!contactRegex.test(contact)) {
        alert("Please enter a valid 10-digit contact number.");
        return;
    }
 
    let property = { title, description, imageURL, contact };
 
    let properties = JSON.parse(localStorage.getItem("properties")) || [];
    properties.push(property);
    localStorage.setItem("properties", JSON.stringify(properties));
 
    displayProperty(property);
 
   
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("imageURL").value = "";
    document.getElementById("contact").value = "";
}
 
function loadProperties() {
    let properties = JSON.parse(localStorage.getItem("properties")) || [];
    properties.forEach(property => displayProperty(property));
}
 