const readMoreBtn = document.querySelectorAll(".readmore-btn");

readMoreBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const parentOfButton = element.parentNode;
    const parentParagraph = parentOfButton.children;
    console.log(parentParagraph);
    parentParagraph[2].children[0].className = "showmore";
  });
});
