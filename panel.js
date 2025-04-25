function generateSectionID() {
  const number = document.getElementById("whatsappNumber").value.trim();

  if (!number || number.length < 8) {
    alert("Please enter a valid WhatsApp number.");
    return;
  }

  const encoded = btoa(number + Date.now()).slice(0, 12);
  document.getElementById("sectionResult").innerHTML =
    `✅ Your Section ID: <code>${encoded}</code>`;
}
