import './App.css';
import React from 'react'
import Question from './components/Question'
import Dropdown from './components/Dropdown';

function App() {
  const [start, setStart] = React.useState(false);
  const [questions, setQuestions] = React.useState([])
  const [newGame, setNewGame] = React.useState(false)
  const [checkAnswers, setCheckAnswers] = React.useState(false) //true
  const [goodAnswers, setGoodAnswers] = React.useState(0)
  const [numberQuestions,  setNumberQuestions] = React.useState(5) // this is for allowed the user for select the number of questions
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  function startNew(){
    setStart(true)
    setCheckAnswers(false)
  }

  function reset(){
    setNewGame(prev => !prev)
    setCheckAnswers(false)
    goToTop()
  }

  function home(){
    setStart(false)
    setNewGame(prev => !prev)
    setCheckAnswers(false)
    setSelectedCategory("All")
  }

  React.useEffect(() => {
    console.log("fetching api")
    switch(selectedCategory){
      case "Science & Nature":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=17`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "General Knowledge":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=9`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Entertainment: Music":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=12`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Entertainment: Television":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=14`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Animals":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=27`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Entertainment: Cartoon & Animations":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=32`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Entertainment: Japanese Anime & Manga":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=31`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Entertainment: Video Games":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=15`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Entertainment: Comics":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=29`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Science: Gadgets":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=30`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Vehicles":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=28`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Geography":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=22`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Entertainment: Books":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=10`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Entertainment: Film":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=11`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Art":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=25`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "History":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=23`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Sports":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=21`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Politics":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=24`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Mythology":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=20`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Science: Computers":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=18`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Science: Mathematics":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=19`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "Celebrities":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}&category=26`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;

      case "All":
        fetch(`https://opentdb.com/api.php?amount=${numberQuestions}`) // 5 questions
        .then(resp => resp.json())
        .then(data => createQuestions(data['results']))
      break;
      
      default:
        console.log("Nothing");
      break;
    }

  } ,[newGame, selectedCategory, numberQuestions])

  // console.log("questions: ", questions)

  function createQuestions(data){
    const random = Math.ceil(Math.random() * 3)

    const questio = data.map((current, index) => {
      // console.log(current.correct_answer)
      let answers = current.incorrect_answers.map((current, index) => {
        return {
          id: index,
          answer: current,
          option: false,
          selected: false 
        }
      })
      
      answers.splice(random, 0, {
        id: random,
        answer: current.correct_answer,
        selected: false,
        option: true
      })
      
      return {
        id: index,
        category: current.category, 
        correctAnswer: current.correct_answer,
        answers: answers,
        difficulty: current.difficulty,
        question: current.question,
        selectedQuestion: false,
      }
    })
    setQuestions(questio)
  }

  function selectCategory(event){
    setSelectedCategory(event.target.value)
  }

  function setNumberQ(event){
    // console.log("number q", event.target.value)
    setNumberQuestions(event.target.value)
  }

  function select(idQuestion, idAnswer){
    const questio = questions.map((currentquestion, index1) => {
      if (idQuestion===index1) {
        return {
          ...currentquestion,
          answers: currentquestion.answers.map((currentAnswer, index) => {
            if(index === idAnswer){
              return {
                ...currentAnswer,
                selected: true 
              }
            }else{
              return {
                ...currentAnswer,
                selected: false
              }
            }
          }),
          selectedQuestion: true
        }
      }else{
        return currentquestion
      }
    })
    setQuestions(questio)
  }

  function check(){
    setCheckAnswers(true)
  
    setGoodAnswers(() => {
      let howMany = 0

      for (let i = 0; i < questions.length; i++) {
        const answers = questions[i].answers;
        for(let y = 0; y < answers.length; y++){
          if(answers[y].option && answers[y].selected){
            howMany += 1
          }
        }
      }
      return howMany 
    })
  }

  const infoquestions = () => {
    let arr = []
    let howmany = 0;
    
    if(questions.length !== 0 || questions !== undefined){
      for(let index = 0; howmany < numberQuestions; index++){
        let current = questions[index]
        console.log("all right: ", current)
        const currentQuestion = current.question 
        let questionfixed = current.question
        let characters = [`& `, `<`, `>`, `"`, `'`]
        let htmlEntities = ["&amp; ", "&lsquo;", "&rsquo;", "&quot;", "&#039;"]
    
        const words = currentQuestion.split(" ")
        for(let i = 0; i < characters.length; i++){
          for(let y = 0; y < words.length; y++){
            questionfixed = questionfixed.replace(`${htmlEntities[i]}`, `${characters[i]}`)
          }
        } 
        if(selectedCategory==="All"){
          howmany++
          arr.push(
            <Question 
              key={index}
              id={index}
              category={current.category}
              correctAnswer={current.correctAnswer}
              answers={current.answers}
              difficulty={current.difficulty}
              question={questionfixed}
              selectedQuestion={current.selectedQuestion}
              select={select}
              checked={checkAnswers}
            />
          )
        }else if(selectedCategory===current.category){
          howmany++
          arr.push(
            <Question 
              key={index}
              id={index}
              category={current.category}
              correctAnswer={current.correctAnswer}
              answers={current.answers}
              difficulty={current.difficulty}
              question={questionfixed}
              selectedQuestion={current.selectedQuestion}
              select={select}
              checked={checkAnswers}
            />
          )
        }
      }
      return arr
    }
    return undefined
  }

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  
  return (
    <div className="App">
      {start===false ? 
        
        <div className='start'>
          <div className='start-tittle'>
            <h1 className='title'>Quizzical</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/3406/3406828.png" alt="quiz" className='img--main'/>
          </div>
          <Dropdown 
            selectCategory={selectCategory}
          />
          <div className='selectNumberDiv'>
            <h6>How many questions: </h6>
            <input type="number" onChange={setNumberQ} className="number--input" placeholder='5'/>
            <h6 className='number--note'>By default are 5 questions</h6>
          </div>
          <div onClick={startNew} className='button--start'>Start</div>
        </div> 

        :

        questions === undefined || questions.length === 0 ? // I have to execute this one 

        <div className='start'>
          <div className='start-tittle'>
            <h1>Quizzical</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/3406/3406828.png" alt="quiz" className='img--main'/>
          </div>
          <div>
            We are sorry, try again please
          </div>
        </div>

        :
        
        <div className='started'>
          
          {infoquestions()}
          {!checkAnswers 
            ? 
            (<div onClick={check} className='checkAnswers'>
              Check answers 
            </div>)  
            :
            (
            <div>
              <h2 className='score-title'>You scored {goodAnswers}/{numberQuestions} correct answers</h2>
              <div className='buttons'>
                <div onClick={reset} className='checkAnswers'>
                  Play Again 
                </div>
                <div onClick={home} className='checkAnswers'>
                  Go back 
                </div>
              </div>
            </div>
            ) 
        }
        </div>
      }
    </div>
  );
}

export default App;




