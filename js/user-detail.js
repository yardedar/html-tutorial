let user = {}
    
    const remove = () => {
        console.log("Delete user ...");
    }
const getUserByPk = () => {
    let id = getUrlId();
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:1052/api/users/${id}`, true);
    xhr.onload = () => {
        user = xhr.response;
        loaded();
    }
    xhr.send();
}
const loaded = () => {
    var url = getUrlId();
    document.getElementById("xid").value = user.id;
    document.getElementById("xusername").value = user.username;
    document.getElementById("xfirstname").value = user.firstName;
    document.getElementById("xlastname").value = user.lastName;
    document.getElementById("xphone").value = user.phone;
    document.getElementById("xemail").value = user.email;
    document.getElementById("xisreviewer").value = user.isReviewer ? "Yes" : "No";
    document.getElementById("xisadmin").value = user.isAdmin ? "Yes" : "No";
}