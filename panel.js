function generateCode() {
  const number = document.getElementById("numberInput").value;
  if (!number) {
    alert("Please enter your WhatsApp number!");
    return;
  }
  const code = Math.floor(10000000 + Math.random() * 90000000);
  document.getElementById("codeDisplay").innerText =
    `Device Code for +${number}: ${code}`;
}

function connectBot() {
  const section = document.getElementById("sectionInput").value;
  if (!section) {
    alert("Please enter your Section ID!");
    return;
  }
  document.getElementById("connectStatus").innerText =
    `Section ${section} connected successfully!`;
}
