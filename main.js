const readMoreBtn = document.querySelectorAll(".readmore-btn");
const button = document.querySelector(".sign");

readMoreBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const parentOfButton = element.parentNode;
    const parentParagraph = parentOfButton.children;
    parentParagraph[2].children[0].className = "showmore";
  });
});

function handleClicked() {
  const text = document.querySelector(".text");
  const email = document.querySelector(".email");
  alert("Thanks For Contacting PARACLETWORLDSERVICE");
  text.value = "";
  email.value = "";
}

button.addEventListener("click", handleClicked);
