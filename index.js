var modalMessage = document.getElementById("modal-message");
var modalClose = document.getElementById("modal-close");
var modal = document.getElementById("modal");
var navbar = document.querySelector(".navbar");
var footer = document.querySelector(".footer");
var text = document.getElementById("text");
var logo = document.getElementById("logo");
var primaryText = document.getElementById("primary-text");
var secondaryText = document.getElementById("secondary-text");
var footerHeading = document.getElementById("footer-heading");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var boxes = [box1, box2, box3, box4, box5, box6];

function showModal(message) {
  modalMessage.innerHTML = message;
  modal.style.visibility = "visible";
}

function closeModal() {
  modal.style.visibility = "hidden";
}

modalClose.addEventListener("click", closeModal);

function primaryColor(color) {
  navbar.style.backgroundColor = color.value;
  footer.style.backgroundColor = color.value;
  document.body.style.backgroundColor = color.value;
  console.log(color.value);
  navigator.clipboard
    .writeText(color.value)
    .then(() => {
      showModal("primary color copied to clipboard:" + color.value);
    })
    .catch((err) => {
      showModal("Failed to copy color value: ", err);
    });
}

function secondaryColor(color) {
  const colorBoxes = boxes.map((box) => {
    return (box.style.backgroundColor = color.value);
  });
  navigator.clipboard
    .writeText(color.value)
    .then(() => {
      showModal("secondary color copied to clipboard:" + color.value);
    })
    .catch((err) => {
      showModal("Failed to copy color value: ", err);
    });
  navbar.style.borderColor = color.value;
  footer.style.borderColor = color.value;
  primaryColor.style.color = color.value;

  console.log(color.value);
}

function textColor(color) {
  logo.style.color = color.value;
  footerHeading.style.color = color.value;
  secondaryText.style.color = color.value;
  primaryText.style.color = color.value;
  text.style.color = color.value;
  navigator.clipboard
    .writeText(color.value)
    .then(() => {
      showModal("text color copied to clipboard:" + color.value);
    })
    .catch((err) => {
      showModal("Failed to copy color value: ", err);
    });
}
