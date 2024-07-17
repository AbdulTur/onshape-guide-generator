import React from 'react';

function Guide({ guide }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Generated Guide:</h2>
      <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap break-words dark:bg-gray-700 dark:text-white">{guide}</pre>
    </section>
  );
}

export default Guide;
