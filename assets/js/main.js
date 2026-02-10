// Toggle code block visibility
function toggleCode(id) {
  const code = document.getElementById(id);
  if (!code) return;
  
  code.style.display = (code.style.display === "block") ? "none" : "block";
}

