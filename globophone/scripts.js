console.log("Loaded");
var validName =false;
var validPhone = false;
var name;
var phone;

function storageCheck () {
    console.log ("storageCheck")
    if (localStorage.name != null && localStorage.name != null) {
        document.getElementById("name").value = localStorage.name
        document.getElementById("phone").value = localStorage.phone
        document.getElementById("clear").style.display = "block";
    }
}

function storeData (n, p) {
    if (validName && validPhone) {
        localStorage.setItem("name", n)
        localStorage.setItem("phone", p)
        window.location.href = "./thanks.html";
    }
    else if (validName && !validPhone) {
        console.log("Invalid phone")
        document.getElementById("message").innerHTML = "Please enter a valid phone number"
    }
    else if (!validName && validPhone) {
        console.log("Invalid name")
        document.getElementById("message").innerHTML = "Please enter a valid name"
    }
    else {
        console.log("Invalid name & phone")
        document.getElementById("message").innerHTML = "Please enter a valid name and phone number"
    }
}

function submitData () {
    name = document.getElementById("name").value
    phone = document.getElementById("phone").value
    phone = phone.replace(/\D/g,'');

    validateName(name);
    validatePhone(phone);
    storeData(name, phone);
}

function validateName (n) {
    if (n != null && n != "") {
        validName = true;
    }
}

function validatePhone (p) {
    if (p != null && !p.startsWith('0') && p.length >= 10 && p.length <= 11) {
        validPhone = true;
    }
}

function clearLS () {
    localStorage.clear();
}

function goBack() {
    window.location.href = "./globophone.html";
}
storageCheck();


