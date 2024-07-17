import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import InputForm from './components/InputForm';
import Guide from './components/Guide';

function App() {
  const [userInput, setUserInput] = useState('');
  const [guide, setGuide] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setGuide('');

    try {
      const response = await fetch('http://127.0.0.1:5000/generate-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_input: userInput }),
      });

      const data = await response.json();

      if (response.ok) {
        setGuide(data.guide);
      } else {
        setError(data.error || 'Error generating guide. Please try again later.');
      }
    } catch (error) {
      setError('Error generating guide. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearInput = () => {
    setUserInput('');
    setGuide('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="max-w-5xl mx-auto p-4">
        <About />
        <InputForm
          userInput={userInput}
          setUserInput={setUserInput}
          handleSubmit={handleSubmit}
          loading={loading}
          error={error}
          clearInput={clearInput}
        />
        <Guide guide={guide} />
      </main>
    </div>
  );
}

export default App;
