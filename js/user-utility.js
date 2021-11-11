// http://localhost:1052/user-detail.html?id=1
const getUrlId = () => {
    let url = window.location.href;
    let parts = url.split("?");
    // console.log(parts);
    let kvpair = parts[1].split("=")
    // console.log(kvpair);
    return +kvpair[1];
}

const displayBoolean = (aBoolean) => {
    return aBoolean ? "Yes" : "No";
}