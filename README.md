# Onshape Guide Generator

## Description

Onshape Guide Generator is a web application that helps users create step-by-step guides for designing parts using Onshape. The application takes user input in the form of text and uses GPT-3.5-turbo AI to generate a detailed guide. The guide follows best Onshape practices and is based on Onshape's pre-built tools.

## Features

- User input for desired design
- Generates detailed step-by-step Onshape design guides
- Supports dark mode toggle
- Clear input functionality
- Logging for tracking requests and errors
- Rate limiting to prevent abuse
- Caching to improve response time

## Prerequisites

- Python 3.x
- Node.js
- npm (Node Package Manager)

## Installation

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/AbdulTur/onshape-guide-generator.git
   cd onshape-guide-generator/backend
   ```

2. Create and activate a virtual environment:

   ```sh
   python -m venv venv
   source venv/bin/activate
   ```

3. Install the required Python packages:

   ```sh
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the `backend` directory and add your OpenAI API key:

   ```plaintext
   OPENAI_API_KEY=your_openai_api_key_here
   ```

5. Run the Flask application:

   ```sh
   python app.py
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:

   ```sh
   cd ../frontend
   ```

2. Install the required npm packages:

   ```sh
   npm install
   ```

3. Start the React application:

   ```sh
   npm start
   ```

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Enter the part you wish to design in the text box and click the "Generate Guide" button.
3. The application will generate a step-by-step guide for designing your part using Onshape best practices.
4. Use the "Clear" button to reset the input and guide.
5. Toggle between light and dark modes using the button in the header.
