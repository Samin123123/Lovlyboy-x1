function showPanel() {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("panel-section").style.display = "block";
}

function backToHome() {
  document.getElementById("main-content").style.display = "block";
  document.getElementById("panel-section").style.display = "none";
}

function generateSectionID() {
  const githubUser = document.getElementById("githubUser").value.trim();
  if (!githubUser) {
    alert("GitHub Username দিন!");
    return;
  }
  const sectionID = `lovly-section-${Math.random().toString(36).substring(2, 10)}`;
  document.getElementById("generatedID").innerText = `তোমার সেকশন আইডি: ${sectionID}`;
}
