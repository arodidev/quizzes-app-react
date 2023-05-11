import './App.css';
import React from 'react';
import Question from './components/Question';

function App() {

  const [quiz, setQuiz] = React.useState([])

  React.useEffect(() => {
    fetch("https://the-trivia-api.com/v2/questions")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setQuiz(data)
    })
  }, [])
  
  return (
    <div className="App">
      { quiz.length > 0 ? 
        <>
        {
          quiz.map((eachObj)=>{
            return <Question key = {eachObj.id} {...eachObj} />
          })
        }
        </>
        : <h1>Page Loading...</h1> }
    </div>
  );
}

export default App;
