import React from "react";
import data from "./data";
import Question from "./Question";
function App() {
  const questions = data;
  return (
    <main className="section">
      <div className="container">
        <h3>FAQ's</h3>
        <ul>
          {questions.map((question) => {
            return <Question key={question.id} question={question} />;
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
