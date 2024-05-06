const websiteInput = document.getElementById('website');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const addEntryButton = document.getElementById('add-entry');
const entriesList = document.getElementById('entries-list');

let entries = []; // Placeholder for storing password entries (improve with secure storage)

function addEntry() {
  const website = websiteInput.value;
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Basic validation (improve with stronger validation)
  if (!website || !username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const newEntry = { website, username, password };
  entries.push(newEntry);

  // Display the entry in the list (improve with secure display)
  const listItem = document.createElement('li');
  listItem.textContent = `${website} (view password requires master password)`;
  entriesList.appendChild(listItem);

  // Clear the input fields
  websiteInput.value = "";
  usernameInput.value = "";
  passwordInput.value = "";
}

addEntryButton.addEventListener('click', addEntry);
