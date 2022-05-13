const toggles = document.querySelectorAll(".faq-toggle");
const fs = require("fs");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
//write to file once user click on submit
let content = document.querySelector(".form-container");
const submit = document.querySelector(".submit");
let text = content.innerText;
console.log(text);
submit.addEventListener(
  "click",
  fs.writeFile("output.txt", text, (err) => {
    if (err) {
      console.error(err);
    }
  })
);
