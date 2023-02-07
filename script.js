let pwContainer = document.getElementById("password");
let pwConfirm = document.getElementById("password-confirm");
let submit = document.getElementById("submit-button");
let errorSpans = document.querySelectorAll(".password-err-msg");

console.log(pwContainer);
console.log(pwConfirm);
console.log(errorSpans);

function passwordCompare(e) {
  if (pwContainer.value != pwConfirm.value) {
    errorSpans.forEach((ele) => {
      ele.style.display = "block";
    });
    return false;
  } else {
    errorSpans.forEach((ele) => {
      ele.style.display = "none";
    });
    return true;
  }
}

//submit.addEventListener("click", passwordCompare);

pwContainer.addEventListener("input", passwordCompare);
pwConfirm.addEventListener("input", passwordCompare);
