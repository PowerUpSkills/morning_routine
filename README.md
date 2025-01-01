# Morning Routine

A simple and elegant task management application built with vanilla JavaScript, HTML, and CSS. Organize your tasks into different categories and manage them with a clean, modern interface.

## Features

- **Default Tasks**: Quick-access list of common tasks that can be added to any category
- **Category Management**: Organize tasks into three categories:
  - Morning Routine
  - Job Tasks
  - Reminders
- **Drag and Drop**: Easily move tasks between categories
- **Local Storage**: Tasks persist between browser sessions
- **Responsive Design**: Works on both desktop and mobile devices

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-organizer.git
cd task-organizer
```

2. Start a local server:
```bash
# Using Python 3
python3 -m http.server 3000

# Using Node.js
npx serve
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

### Adding Tasks

1. **From Default Tasks**:
   - Click the "Default Tasks" section to expand
   - Click the "+" button next to any default task
   - Select a category from the modal

2. **Custom Tasks**:
   - Type your task in the input field
   - Click "Add Task" or press Enter
   - Select a category from the modal

### Managing Tasks

- **Move Tasks**: Drag and drop tasks between categories
- **Delete Tasks**: Click the "×" button on any task
  - Choose "Put Back" to move it to the default tasks
  - Choose "Delete" to remove it permanently

## Project Structure

```
task-organizer/
├── index.html      # Main HTML file
├── styles.css      # Styling
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
