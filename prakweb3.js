// ======= PAGE APPEARANCE SCRIPT =======
const body = document.body;
const bgColorSelect = document.getElementById("bgColor");
const increaseFontBtn = document.getElementById("increaseFont");
const decreaseFontBtn = document.getElementById("decreaseFont");
const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
const fontStyleSelect = document.getElementById("fontStyle");

let fontSize = 16;
let darkMode = false;

bgColorSelect.addEventListener("change", () => {
  body.style.backgroundColor = bgColorSelect.value;
});

increaseFontBtn.addEventListener("click", () => {
  fontSize += 2;
  body.style.fontSize = fontSize + "px";
});

decreaseFontBtn.addEventListener("click", () => {
  if (fontSize > 10) fontSize -= 2;
  body.style.fontSize = fontSize + "px";
});

toggleDarkModeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  body.classList.toggle("dark-mode", darkMode);
  toggleDarkModeBtn.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});

fontStyleSelect.addEventListener("change", () => {
  body.style.fontFamily = fontStyleSelect.value;
});

// ======= TO-DO LIST SCRIPT =======
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  li.appendChild(deleteBtn);

  li.addEventListener("click", () => li.classList.toggle("completed"));
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTaskBtn.click();
});
