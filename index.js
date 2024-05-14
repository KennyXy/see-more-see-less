const see_more_button = document.querySelector(".see-more-btn");
const text_container = document.querySelector(".text-container");
const text_to_show = document.querySelector("#flower");

function foo() {
  see_more_button.style.display = "block";
  //text_container.classList.remove("remove-gradient");
}

window.onload = () => {
  foo();
};

see_more_button.addEventListener("click", function () {
  this.firstElementChild.textContent =
    this.firstElementChild.textContent == "See more" ? "See less" : "See more";
  text_container.classList.toggle("remove-gradient");
  text_to_show.style.height =
    text_to_show.style.height == "" ? text_to_show.scrollHeight + "px" : "";
  console.log(text_to_show.classList);
});
