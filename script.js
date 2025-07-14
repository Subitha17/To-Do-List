const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Arrow function to add task
const addTask = () => {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement('li');

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Toggle strikethrough when checkbox is checked
  checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked);
  });

  // Task text
  const span = document.createElement('span');
  span.textContent = text;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener('click', () => li.remove());

  // Append elements
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = '';
};

// Trigger add task on button click
addBtn.addEventListener('click', addTask);

// Trigger add task on Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});