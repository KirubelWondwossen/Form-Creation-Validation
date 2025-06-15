async function fetchUserData() {
  const dataContainer = document.getElementById("api-data");
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((el) => {
      const li = document.createElement("li");
      li.textContent = el.name;
      userList.appendChild(li);
    });
    dataContainer.append(userList);
  } catch (error) {
    dataContainer.innerHTML = "Failed to load user data.";
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
