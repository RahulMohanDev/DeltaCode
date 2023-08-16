// javascript code goes here
let i = 1;
async function fetchByPage() {
  const cont = document.getElementById("issue_container");
  const pi = document.getElementById("page_indicator");
  pi.innerText = `Page number ${i}`;
  const rawData = await fetch(
    `https://api.github.com/repositories/1296269/issues?page=${i}&per_page=5`
  );
  const parsedData = await rawData.json();
  let store = "";
  parsedData.forEach((issue) => {
    store += `<li>${issue.title}</li>`;
  });
  cont.innerHTML = store;
}
fetchByPage(i);
function loadNext() {
  i++;
  fetchByPage();
}
function loadPrev() {
  if (i === 1) return;
  i--;
  fetchByPage();
}
