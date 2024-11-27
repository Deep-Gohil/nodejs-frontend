import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let { token } = Cookies.get();

const decodedToken = token ? jwt_decode(token) : undefined;

document.getElementById("detail-username").innerHTML = decodedToken.username
document.getElementById("detail-email").innerHTML = decodedToken.email
document.getElementById("detail-role").innerHTML = decodedToken.role
