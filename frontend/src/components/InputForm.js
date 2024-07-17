import React from 'react';

function InputForm({ userInput, setUserInput, handleSubmit, loading, error, clearInput }) {
  return (
    <section className="mb-8 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-input" className="block text-lg font-medium mb-2 dark:text-white"><strong>What do you wish to design?</strong></label>
        <input
          type="text"
          id="user-input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 dark:bg-gray-700 dark:text-white"
          required
        />
        <div className="flex space-x-2">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Generate Guide</button>
          <button type="button" onClick={clearInput} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            Clear
          </button>
        </div>
      </form>
      {loading && <div className="mt-4 text-gray-700 dark:text-gray-300 italic">Generating guide...</div>}
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </section>
  );
}

export default InputForm;
