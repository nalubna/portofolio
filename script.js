const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const formattedName = encodeURIComponent(name);
  const formattedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/6287772564987?text=${formattedName}%0A${formattedMessage}`;
  window.open(whatsappUrl);
});

const sidebar = document.querySelector(".sidebar");

function showSidebar() {
  sidebar.style.display = "flex";
}

function hideSidebar() {
  sidebar.style.display = "none";
}
