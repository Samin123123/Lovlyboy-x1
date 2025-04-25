// Panel UI toggle functions
function showPanel() {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("panel-section").style.display = "block";
}

function backToHome() {
  document.getElementById("main-content").style.display = "block";
  document.getElementById("panel-section").style.display = "none";
}

// Section ID Generator
function generateSectionID() {
  const githubUser = document.getElementById("githubUser").value.trim();
  if (!githubUser) {
    alert("GitHub Username দিন!");
    return;
  }
  const sectionID = `lovly-section-${Math.random().toString(36).substring(2, 10)}`;
  document.getElementById("generatedID").innerText = `তোমার সেকশন আইডি: ${sectionID}`;
}

// Section ID Submit Handler
document.addEventListener("DOMContentLoaded", function () {
  const sectionForm = document.getElementById("sectionForm");
  if (sectionForm) {
    sectionForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const sectionId = document.getElementById("sectionId").value.trim();
      if (!sectionId) {
        alert("Section ID ফাঁকা রাখা যাবে না!");
        return;
      }
      alert("সেকশন আইডি সফলভাবে যুক্ত হয়েছে: " + sectionId);
      // এখানে চাইলে GitHub repo বা ডেটাবেসে সাবমিটের কোড বসানো যেতে পারে
    });
  }
});
