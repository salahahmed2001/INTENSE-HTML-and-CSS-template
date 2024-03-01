document.querySelector(".btn").addEventListener("click", function () {
  let list = document.querySelector(".list");
  list.classList.toggle("list_show");
});
let btn_icon = document.querySelector(".btn-icon");
window.onscroll = function () {
  let value = scrollY;
  console.log(value);
  if (scrollY >= 400) {
    btn_icon.style.opacity = "1";
  }else{
    btn_icon.style.opacity = "0";
  }
};
