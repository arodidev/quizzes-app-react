import './App.css';
import React from 'react';

function App() {

  const [quiz, setQuiz] = React.useState([])

  React.useEffect(()=>{
    fetch("https://the-trivia-api.com/v2/questions")
      .then(res => res.json())
      .then(data=> setQuiz(data))
  },[])

  const logged = quiz.map((eachQuiz)=>{
      return(
      <p>
        {eachQuiz}
      </p>
      )
  })

  return (
    <div className="App">
      {logged}
    </div>
  );
}

export default App;
