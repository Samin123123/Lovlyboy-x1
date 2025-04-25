// panel.js
function generateCode() {
  const number = document.getElementById("numberInput").value.trim();
  if (!number || number.length < 10) {
    document.getElementById("codeDisplay").innerText = "Please enter a valid number.";
    return;
  }

  // Generate 8-digit random code
  const code = Math.floor(10000000 + Math.random() * 90000000).toString();
  document.getElementById("codeDisplay").innerText = `Section ID for ${number}: ${code}`;

  // Save to localStorage (or later to backend)
  localStorage.setItem(`section_${number}`, code);
}

function connectBot() {
  const sectionID = document.getElementById("sectionInput").value.trim();
  if (!sectionID || sectionID.length !== 8) {
    document.getElementById("connectStatus").innerText = "Enter a valid 8-digit Section ID.";
    return;
  }

  document.getElementById("connectStatus").innerText = `✅ Bot connected with Section ID: ${sectionID}`;

  // Future: API call to backend or bot integration
}
