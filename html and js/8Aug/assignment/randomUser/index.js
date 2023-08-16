// javascript code goes here
const img = document.querySelector(".img-holder img");
const userNameEl = document.querySelector("h2.user-name");
const userInfoEl = document.querySelector(".user-info");
const btns = document.querySelectorAll(".btn-holder button");
const getRandomUserInfo = async () => {
  const URL = "https://randomuser.me/api/";
  const response = await fetch(URL);
  const data = await response.json();
  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;

  return {
    phone,
    email,
    image,
    name: `${first} ${last}`,
    age,
  };
};
const display = async () => {
  userInfoEl.innerText = "";
  const data = await getRandomUserInfo();
  img.setAttribute("src", data["image"]);
  userNameEl.innerHTML = data["name"];
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      userInfoEl.innerText = data[e.target.dataset["attr"]];
    });
  });
};
display();
