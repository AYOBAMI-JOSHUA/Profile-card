function updateTime() {
  const timeEl = document.getElementById("user-time");
  timeEl.textContent = Date.now();
}

// Initial render
updateTime();

// Optional: update every second
setInterval(updateTime, 1000);
