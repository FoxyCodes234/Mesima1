const passowrd = document.getElementById("password");
passowrd.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    buttonClick();
  }
});

function addQuestion() {
  const newContainer = document.createElement("div");
  const container = document.getElementById("container");
  const newH3 = document.createElement("h3");
  const newTextBox = document.createElement("input");
  const newButton = document.createElement("button");
  newH3.innerText = "What is your name?";
  newTextBox.setAttribute.type = "text";
  newTextBox.placeholder = "Enter Name Here";
  newTextBox.setAttribute("id", "textBox");
  newButton.innerText = "Submit";
  newTextBox.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      if (document.getElementById("textBox").value != "") {
        const textBox = document.getElementById("textBox").value;
        newContainer.remove();
        newH3.innerText = `Welcome, ${textBox}`;
        container.appendChild(newH3);
      }
    }
  });

  newButton.onclick = function checkName() {
    if (document.getElementById("textBox").value != "") {
      const textBox = document.getElementById("textBox").value;
      newContainer.remove();
      newH3.innerText = `Welcome, ${textBox}`;
      container.appendChild(newH3);
    }
  };

  newContainer.appendChild(newH3);
  newContainer.appendChild(newTextBox);
  newContainer.appendChild(newButton);
  container.appendChild(newContainer);
}

function buttonClick() {
  const formContainer = document.getElementById("formContainer");
  const userName = document.getElementById("username");
  const passowrd = document.getElementById("password");
  const fLabel = document.getElementById("fLabel");
  const sLabel = document.getElementById("sLabel");

  if (userName.value.toLowerCase() == "admin" && passowrd.value == "123") {
    formContainer.remove();
    addQuestion();
  } else if (
    userName.value.toLowerCase() == "admin" &&
    passowrd.value != "123"
  ) {
    sLabel.style.color = "red";
  } else if (
    userName.value.toLowerCase() != "admin" &&
    passowrd.value == "123"
  ) {
    fLabel.style.color = "red";
  } else {
    fLabel.style.color = "red";
    sLabel.style.color = "red";
  }
  userName.value = "";
  passowrd.value = "";
}
