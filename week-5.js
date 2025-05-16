// Change the description text dynamically when button clicked
const changeTextBtn = document.getElementById("changeTextBtn");
const description = document.getElementById("description");

changeTextBtn.addEventListener("click", () => {
  description.textContent =
    "This workshop covers innovative precision farming methods that increase crop productivity and conserve resources.";
  description.style.fontWeight = "700";
  description.style.color = "#2e7d32";
});

// Add and remove list items in topics
const addTopicBtn = document.getElementById("addTopicBtn");
const removeTopicBtn = document.getElementById("removeTopicBtn");
const topicsList = document.getElementById("topics-list");

addTopicBtn.addEventListener("click", () => {
  const newTopic = document.createElement("li");
  newTopic.textContent = "Using Sensors for Crop Monitoring";
  newTopic.style.color = "#33691e";
  newTopic.style.fontStyle = "italic";
  topicsList.appendChild(newTopic);
});

removeTopicBtn.addEventListener("click", () => {
  if (topicsList.lastChild) {
    topicsList.removeChild(topicsList.lastChild);
  }
});

// Handle form submission dynamically
const form = document.getElementById("registration-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent actual form submit

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    formMessage.textContent = `Thank you, ${name}, for registering! We'll contact you at ${email}.`;
    formMessage.style.color = "#2e7d32";
    form.reset();
  } else {
    formMessage.textContent = "Please fill out both fields.";
    formMessage.style.color = "red";
  }
});
