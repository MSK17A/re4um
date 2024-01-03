import { isloggedIn } from "../helper_funcs/isLoggedIn.js";

const loadNav = async (home_path) => {
  await isloggedIn(); // check if user is logged in
  let nav = ``;
  let islogged = localStorage.getItem("isloggedIn");
  if (islogged === "true") {
    nav = `
      <nav>
        <a href="${home_path}">
          <div class="logo">Re4um</div>
        </a>
        <ul class="actionitems">
          <li>
            <a href="${home_path}create_post">
              <img
                src="${home_path}static/assets/plus-large-svgrepo-com.svg"
                alt="add Icon"
                class="navicon"
                title="Create Post"
              />
            </a>
          </li>
          <li>
            <img
              src="${home_path}static/assets/information-circle-svgrepo-com.svg"
              alt="about Page Icon"
              class="navicon"
              title="About"
            />
          </li>
          <li>
            <img
              src="${home_path}static/assets/API.svg"
              alt="API Icon"
              class="navicon"
              title="API documentation"
            />
          </li>
          <li>
            <img
              src="${home_path}static/assets/HomeIcon.svg"
              alt="HomeIcon"
              class="navicon"
              title="Back To Homepage"
              onclick="location.href('/')"
            />
          </li>
          <li>
            <img
              src="${home_path}static/assets/REgallery.svg"
              alt="ReGallery (SOON!)"
              class="navicon"
              title="Regallery (SOON!)"
            />
          </li>
          <li>
            <img
              src="${home_path}static/assets/chat.svg"
              alt="chatIcon"
              class="navicon"
              title="chat (SOON)"
            />
          </li>
        </ul>
        <div>
          <a href="${home_path}logout">
            <button class="profile" id="profileBtn">Sign Out</button>
          </a>
        </div>
      </nav>
    `;
  } else {
    nav = `
      <nav>
        <a href="${home_path}">
          <div class="logo">Re4um</div>
        </a>
        <ul class="actionitems">
          <li>
            <a href="${home_path}login">
              <img
                src="${home_path}static/assets/plus-large-svgrepo-com.svg"
                alt="add Icon"
                class="navicon"
                title="Create Post"
              />
            </a>
          </li>
          <li>
            <img
              src="${home_path}static/assets/information-circle-svgrepo-com.svg"
              alt="about Page Icon"
              class="navicon"
              title="About"
            />
          </li>
          <li>
            <img
              src="${home_path}static/assets/API.svg"
              alt="API Icon"
              class="navicon"
              title="API documentation"
            />
          </li>
          <li>
            <img
              src="${home_path}static/assets/HomeIcon.svg"
              alt="HomeIcon"
              class="navicon"
              title="Back To Homepage"
              onclick="location.href('/')"
            />
          </li>
          <li>
            <img
              src="${home_path}static/assets/REgallery.svg"
              alt="ReGallery (SOON!)"
              class="navicon"
              title="Regallery (SOON!)"
            />
          </li>
          <li>
            <img
              src="${home_path}static/assets/chat.svg"
              alt="chatIcon"
              class="navicon"
              title="chat (SOON)"
            />
          </li>
        </ul>
        <div>
          <a href="${home_path}login">
            <button class="profile" id="profileBtn">Sign In</button>
          </a>
          <a href="${home_path}signup">
            <button class="profile" id="profileBtn">Sign Up</button>
          </a>
        </div>
      </nav>
    `;
  }

  return nav;
  // let body = document.body;
  // body.insertAdjacentHTML("beforebegin", nav);
};

export { isloggedIn, loadNav };
