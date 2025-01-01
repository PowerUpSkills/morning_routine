// Default tasks with emojis
const defaultItems = [
    { id: 'd1', text: '💪 muscle training' },
    { id: 'd2', text: '🥗 organic food' },
    { id: 'd3', text: '💅 fingernails' },
    { id: 'd4', text: '📞 call dad' },
    { id: 'd5', text: '✍️ blogging' },
    { id: 'd6', text: '📧 Emails' },
    { id: 'd7', text: '👔 Iron Clothes' }
];

// State management
let tasks = {
    morning: [],
    job: [],
    reminder: [],
    putBack: []
};

let activeTaskId = null;
let pendingTask = '';
let isDefaultsOpen = true;
let draggedTask = null;
let selectedPutBackTask = null;

// DOM Elements
const defaultsToggle = document.getElementById('defaultsToggle');
const defaultTasksList = document.getElementById('defaultTasksList');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const categoryModal = document.getElementById('categoryModal');
const putBackModal = document.getElementById('putBackModal');
const putBackBtn = document.getElementById('putBackBtn');
const deleteBtn = document.getElementById('deleteBtn');

// Initialize default tasks
function renderDefaultTasks() {
    defaultTasksList.innerHTML = defaultItems.map(item => `
        <div class="task-item flex items-center justify-between py-2" data-id="${item.id}">
            <span>${item.text}</span>
            <button class="add-btn px-2 py-1 text-blue-500 hover:bg-blue-50 rounded">+</button>
        </div>
    `).join('');

    // Add click handlers for add buttons
    defaultTasksList.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const taskItem = e.target.closest('.task-item');
            const taskId = taskItem.dataset.id;
            const task = defaultItems.find(t => t.id === taskId);
            pendingTask = task.text;
            showCategoryModal();
        });
    });
}

// Toggle default tasks section
defaultsToggle.addEventListener('click', () => {
    isDefaultsOpen = !isDefaultsOpen;
    defaultTasksList.style.display = isDefaultsOpen ? 'block' : 'none';
    defaultsToggle.querySelector('.toggle-icon').textContent = isDefaultsOpen ? '▼' : '▶';
});

// Show category selection modal
function showCategoryModal() {
    categoryModal.classList.remove('hidden');
}

// Hide category selection modal
function hideCategoryModal() {
    categoryModal.classList.add('hidden');
}

// Show put back modal
function showPutBackModal(task) {
    selectedPutBackTask = task;
    putBackModal.classList.remove('hidden');
}

// Hide put back modal
function hidePutBackModal() {
    putBackModal.classList.add('hidden');
    selectedPutBackTask = null;
}

// Add task to a specific section
function addTask(text, section) {
    const newTask = {
        id: Date.now().toString(),
        text: text
    };
    tasks[section].push(newTask);
    saveTasks();
    renderTasks();
}

// Remove task from a section
function removeTask(taskId, section) {
    tasks[section] = tasks[section].filter(task => task.id !== taskId);
    saveTasks();
    renderTasks();
}

// Handle drag start
function handleDragStart(task, section) {
    draggedTask = { ...task, fromSection: section };
}

// Handle drag over
function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('border-blue-500');
}

// Handle drag leave
function handleDragLeave(e) {
    e.currentTarget.classList.remove('border-blue-500');
}

// Handle drop
function handleDrop(e, section) {
    e.preventDefault();
    e.currentTarget.classList.remove('border-blue-500');

    if (draggedTask) {
        if (draggedTask.fromSection) {
            removeTask(draggedTask.id, draggedTask.fromSection);
        }
        addTask(draggedTask.text, section);
        draggedTask = null;
    }
}

// Render tasks for all sections
function renderTasks() {
    ['morning', 'job', 'reminder'].forEach(section => {
        const container = document.getElementById(`${section}Tasks`);
        container.innerHTML = tasks[section].length ? tasks[section].map(task => `
            <div class="task-item flex items-center justify-between p-2 mb-2 bg-white border rounded-lg shadow-sm" 
                 draggable="true" 
                 data-id="${task.id}"
                 data-section="${section}">
                <span>${task.text}</span>
                <button class="delete-btn text-red-500 hover:bg-red-50 rounded px-2">×</button>
            </div>
        `).join('') : '<div class="task-placeholder text-gray-400">Drag tasks here</div>';

        // Add drag and drop handlers
        const taskItems = container.querySelectorAll('.task-item');
        taskItems.forEach(item => {
            item.addEventListener('dragstart', () => {
                const taskId = item.dataset.id;
                const section = item.dataset.section;
                const task = tasks[section].find(t => t.id === taskId);
                handleDragStart(task, section);
            });
        });

        // Add delete button handlers
        const deleteButtons = container.querySelectorAll('.delete-btn');
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const taskItem = e.target.closest('.task-item');
                const taskId = taskItem.dataset.id;
                const section = taskItem.dataset.section;
                showPutBackModal({ id: taskId, section });
            });
        });
    });
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
}

// Initialize the application
function init() {
    // Load saved tasks
    loadTasks();

    // Render initial state
    renderDefaultTasks();
    renderTasks();

    // Add task input handlers
    addTaskBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text) {
            pendingTask = text;
            showCategoryModal();
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const text = e.target.value.trim();
            if (text) {
                pendingTask = text;
                showCategoryModal();
                e.target.value = '';
            }
        }
    });

    // Category modal handlers
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            addTask(pendingTask, category);
            hideCategoryModal();
            pendingTask = '';
        });
    });

    // Put back modal handlers
    putBackBtn.addEventListener('click', () => {
        if (selectedPutBackTask) {
            tasks.putBack.push(...tasks[selectedPutBackTask.section].filter(t => t.id === selectedPutBackTask.id));
            removeTask(selectedPutBackTask.id, selectedPutBackTask.section);
            hidePutBackModal();
        }
    });

    deleteBtn.addEventListener('click', () => {
        if (selectedPutBackTask) {
            removeTask(selectedPutBackTask.id, selectedPutBackTask.section);
            hidePutBackModal();
        }
    });

    // Close modals when clicking outside
    [categoryModal, putBackModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                if (modal === putBackModal) {
                    selectedPutBackTask = null;
                }
            }
        });
    });

    // Add drag and drop handlers to task lists
    ['morning', 'job', 'reminder'].forEach(section => {
        const container = document.getElementById(`${section}Tasks`);
        container.addEventListener('dragover', handleDragOver);
        container.addEventListener('dragleave', handleDragLeave);
        container.addEventListener('drop', (e) => handleDrop(e, section));
    });
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);