# FUTMINNA Helpdesk

A prototype AI-powered helpdesk chatbot interface for Federal University of Technology Minna (FUTMINNA).

## Overview

This project provides a simple, interactive web-based chatbot interface designed to assist students and staff at FUTMINNA. The chatbot uses a clean, modern UI built with Tailwind CSS and provides a conversational experience.

## Features

- 💬 Interactive chat interface with user-friendly design
- 🤖 AI assistant responses powered by a JSON-based reply system
- 🎨 Modern UI with Tailwind CSS styling
- ⚡ Real-time message display with smooth interactions
- 📱 Responsive design with gradient purple theme

## Project Structure

```
├── index.html        # Main HTML structure and chat interface
├── function.js       # JavaScript logic for chat functionality
├── style.css         # Custom CSS styling
├── replies.json      # JSON file containing assistant responses
└── README.md         # This file
```

## Files Description

### `interface.html`

The main HTML file that contains the chatbot interface structure. Features:

- Chat display area for message history
- User input field
- Send button
- AI assistant header with branding

### `function.js`

Handles the chatbot logic including:

- Event listeners for user input and send button
- Message creation and DOM manipulation
- Fetching responses from `replies.json`
- Displaying messages with appropriate styling

### `style.css`

Custom styling for the chatbot interface (complements Tailwind CSS utilities).

### `replies.json`

JSON file containing the assistant's responses. Currently contains a prototype message indicating limited functionality.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required for basic functionality

### Installation

1. Clone the repository:

```bash
git clone https://github.com/thatladtemod/FUTMINNA-HELPDESK.git
cd FUTMINNA-HELPDESK
```

2. Open `index.html` in your web browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

3. Navigate to `http://localhost:8000` and open the chatbot

## Usage

1. Type your message in the input field at the bottom of the chat window
2. Click the send button or press Enter to submit your message
3. Wait for the AI assistant to respond (2-second delay simulated)
4. Messages appear in the chat history with user and assistant avatars

## Current Status

⚠️ **This is a prototype version** - The chatbot currently returns a placeholder response from `replies.json`. Full AI functionality is under development.

## Development

To extend this project:

1. **Add more responses**: Update `replies.json` with more complex response logic
2. **Integrate real AI**: Connect to an actual AI API or backend service
3. **Enhance styling**: Modify `style.css` or Tailwind classes in `interface.html`
4. **Add features**: Implement message persistence, typing indicators, etc.

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with Tailwind CSS
- **JavaScript (Vanilla)** - Interactivity
- **JSON** - Data format for responses

## Author

Created by [@thatladtemod](https://github.com/thatladtemod)

## License

This project is part of the FUTMINNA Helpdesk initiative. Please check with the repository owner for license details.

## Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## Notes

- The chatbot has a 2-second delay before responding to simulate a more natural conversation
- Currently designed as a prototype to demonstrate the UI/UX concept
- Future versions will include integration with actual AI services
