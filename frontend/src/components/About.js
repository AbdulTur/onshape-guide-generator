import React from 'react';

function About() {
  return (
    <section className="mb-8 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 dark:text-white">About</h2>
      <p className="mb-4 dark:text-white">
        Onshape Guide Generator is a web application that helps users create step-by-step guides for designing parts
        using Onshape. The application takes user input in the form of text and uses GPT-3.5-turbo AI to generate a
        detailed guide. The guide follows best Onshape practices and is based on Onshape's pre-built tools.
      </p>
      <h2 className="text-xl font-bold mb-4 dark:text-white">How to Use</h2>
      <p className="dark:text-white">
        To use the Onshape Guide Generator, simply type the part you wish to design in the text box below labeled
        "<strong>What do you wish to design?</strong>". Once you have entered your desired part, click the "Generate
        Guide" button. The application will then generate a step-by-step guide for designing your part using Onshape
        best practices. The generated guide will be displayed below in the "Generated Guide" section.
        Wait a few seconds for the application to generate the guide.
      </p>
    </section>
  );
}

export default About;
