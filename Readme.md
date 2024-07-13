# Stoic Maxims

## This is a simple React application that displays quotes from authors, with pagination and sharing features. The app allows you to view quotes by author and share each quote on various social media platforms.

### Features
- **Quote Display**: Displays quotes from a JSON file.
- **Pagination**: Allows navigation between different pages of quotes.
- **Sharing**: Each quote can be shared on various social media platforms, including Facebook, Twitter, WhatsApp, Telegram, LinkedIn, and Reddit.
- **Author Page**: Displays all quotes from a specific author.

### Project Structure
- **src/assets/frases.json**: JSON file containing the quotes.
- **src/components/Author.js**: Component that displays quotes from a specific author with pagination and sharing features.
- **src/components/Pagination.js**: Pagination component to navigate between pages of quotes.

### How It Works
- **Data Loading**: Quotes are loaded from a JSON file located at src/assets/frases.json.
- **Filtering by Author**: Quotes are filtered by author based on the URL parameter.
- **Pagination**: Quotes are paginated, showing a specific number of quotes per page.
- **Sharing**: Each quote has share buttons that allow users to share the quote on various social media platforms.
- **Author Page**: The app has a dedicated page for each author, displaying all quotes from that author.

### JSON Structure
The frases.json file should have the following structure:

```json
[
  {
    "id": 1,
    "author": "Author 1",
    "text": "Quote 1 from Author 1"
  },
  {
    "id": 2,
    "author": "Author 2",
    "text": "Quote 1 from Author 2"
  }
]
```

### Main Components
**Author.jsx**
The Author component displays quotes from a specific author. It uses the following hooks and features:

- **useParams:** To get the author from the URL.
- **useState:** To manage the state of quotes and the current page.
- **useEffect:** To load and filter quotes by author.
- **Pagination:** Pagination component to navigate between pages of quotes.
- **react-share:** Library used for the share buttons.

  **Pagination.jsx**
  The Pagination component allows navigation between different pages of quotes. It calculates the total number of pages based on the total number of quotes and the number of quotes per page.

### How to Run
To run the project locally:

Clone the repository.
Install dependencies with npm install.
Start the application with npm start.
This README.md provides an overview of the project in English, including its features, project structure, how it works, JSON structure, main components, and instructions on how to run the project locally.





