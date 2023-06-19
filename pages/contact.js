const submitButton = document.querySelector(".submit");
function handleclick() {
  const first = document.querySelector(".first");
  const last = document.querySelector(".last");
  const email = document.querySelector(".email");
  confirm("Your Form Has Been Submitted Successfully!!");
  first.value = "";
  last.value = "";
  email.value = "";
}
submitButton.addEventListener("click", handleclick);
