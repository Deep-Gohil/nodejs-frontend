let { token } = Cookies.get();

const decodedToken = token ? jwt_decode(token) : undefined;


// const navbar = () => {
//   let tag = ``;
//   if (decodedToken) {
//     tag = `<a class="nav-link" id="logout">Logout</a>`;
//   } else {
//     tag = `<a class="nav-link" href="/pages/login.html">Login</a>`;
//   }
//   return `
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//       <div class="container-fluid">
//         <a class="navbar-brand" href="/index.html">Navbar</a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="/pages/products.html">Products</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="/pages/cart.html">Cart</a>
//             </li>
//             <li class="nav-item">
//               ${tag}
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" ${decodedToken ? "" : ` href=/pages/signup.html`
//     }>${decodedToken ? decodedToken.username : "Signup"}</a>
//             </li>
//           </ul>
//           <form class="d-flex" role="search">
//             <input
//               class="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button class="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   `;
// };

// export default navbar;



// let popupLogout = document.querySelector(".popup-parent")
// // popupLogout.classList.add("d-none")
// document.addEventListener("DOMContentLoaded", ()=>{
//   let logoutBtn = document.getElementById("logout")
//   if(logoutBtn){
//     logoutBtn.addEventListener("click", ()=>{
//       popupLogout.classList.add("d-block")

      
//       // Cookies.remove("token");
//       // window.location.href = "/index.html"
//     })
//   }

  

// })
// if(popupLogout){
//   const handleCancle = ()=>{
//     popupLogout.classList.add("d-none")
//   }
//   document.querySelector(".btn-cancel").addEventListener("click",handleCancle)
//   const handleLogout = ()=>{
//     Cookies.remove("token");
//     Cookies.remove("isVerified");
//     window.location.href = "/index.html"
//   }
//   document.querySelector(".btn-logout").addEventListener("click",handleLogout)
// }

const navbar = () => {
  let tag = ``;
  if (decodedToken) {
    tag = `<a class="nav-link" id="logout">Logout</a>`;
  } else {
    tag = `<a class="nav-link" href="/pages/login.html">Login</a>`;
  }

  return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/index.html">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/products.html">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/cart.html">Cart</a>
            </li>
            <li class="nav-item">
              ${tag}
            </li>
            <li class="nav-item">
              <a class="nav-link" ${
                decodedToken ? "" : `href=/pages/signup.html`
              }>
                ${decodedToken ? decodedToken.username : "Signup"}
              </a>
            </li>
            ${
              decodedToken
                ? `<li class="nav-item">
                     <a class="nav-link" href="/pages/profile.html">Profile</a>
                   </li>`
                : ""
            }
            ${
              decodedToken
                ? `<li class="nav-item">
                     <a class="nav-link" href="/pages/addProducts.html">Add Products</a>
                   </li>`
                : ""
            }
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  `;
};

export default navbar;

document.addEventListener("DOMContentLoaded", () => {
  const popupLogout = document.querySelector(".popup-parent");
  const logoutBtn = document.getElementById("logout");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      popupLogout.classList.add("d-block");
    });
  }

  if (popupLogout) {
    const handleCancel = () => {
      popupLogout.classList.add("d-none");
    };

    document.querySelector(".btn-cancel").addEventListener("click", handleCancel);

    const handleLogout = () => {
      Cookies.remove("token");
      Cookies.remove("isVerified");
      window.location.href = "/index.html";
    };

    document.querySelector(".btn-logout").addEventListener("click", handleLogout);
  }
});
