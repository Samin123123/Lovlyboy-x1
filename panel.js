// panel.js

document.addEventListener('DOMContentLoaded', () => { const form = document.getElementById('sectionForm');

form.addEventListener('submit', (e) => { e.preventDefault(); const sectionId = document.getElementById('sectionId').value.trim();

if (sectionId === '') {
  alert('Please enter a valid Section ID.');
  return;
}

// Simulate connecting the section (you can enhance this with real API later)
localStorage.setItem('connectedSection', sectionId);
alert(`Section ID '${sectionId}' connected successfully!`);

});

// Check for existing section ID const savedSection = localStorage.getItem('connectedSection'); if (savedSection) { document.getElementById('sectionId').value = savedSection; } });

                          
