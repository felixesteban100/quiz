import React from 'react'
import Question from './components/Question';
// import Dropdown from './components/Dropdown';
import Header from './components/Header';
// import './App.css';


// I HAVE TO MAKE IT RESPONSIVE WITH TAILWIND CSS


function App() {
  const [start, setStart] = React.useState(false);
  const [questions, setQuestions] = React.useState([])
  const [newGame, setNewGame] = React.useState(false)
  const [checkAnswers, setCheckAnswers] = React.useState(false) //true
  const [goodAnswers, setGoodAnswers] = React.useState(0)
  const [numberQuestions, setNumberQuestions] = React.useState(5) // this is for allowed the user for select the number of questions
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  function startNew() {
    setStart(true)
    setCheckAnswers(false)
  }

  function reset() {
    setNewGame(prev => !prev)
    setCheckAnswers(false)
    goToTop()
  }

  function home() {
    setStart(false)
    setNewGame(prev => !prev)
    setCheckAnswers(false)
    setSelectedCategory("All")
  }
 
  React.useEffect(() => {
    switch (selectedCategory) {
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

  }, [newGame, selectedCategory, numberQuestions])

  function createQuestions(data) {
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

  function selectCategory(event) {
    setSelectedCategory(event.target.value)
  }

  function setNumberQ(event) {
    // console.log("number q", event.target.value)
    setNumberQuestions(event.target.value)
  }

  function select(idQuestion, idAnswer) {
    const questio = questions.map((currentquestion, index1) => {
      if (idQuestion === index1) {
        return {
          ...currentquestion,
          answers: currentquestion.answers.map((currentAnswer, index) => {
            if (index === idAnswer) {
              return {
                ...currentAnswer,
                selected: true
              }
            } else {
              return {
                ...currentAnswer,
                selected: false
              }
            }
          }),
          selectedQuestion: true
        }
      } else {
        return currentquestion
      }
    })
    setQuestions(questio)
  }

  function check() {
    setCheckAnswers(true)

    setGoodAnswers(() => {
      let howMany = 0

      for (let i = 0; i < questions.length; i++) {
        const answers = questions[i].answers;
        for (let y = 0; y < answers.length; y++) {
          if (answers[y].option && answers[y].selected) {
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

    if (questions.length !== 0 || questions !== undefined) {
      for (let index = 0; howmany < numberQuestions; index++) {
        let current = questions[index]
        console.log("all right: ", current)
        const currentQuestion = current.question
        let questionfixed = current.question
        let characters = [`& `, `<`, `>`, `"`, `'`, "é"]
        let htmlEntities = ["&amp; ", "&lsquo;", "&rsquo;", "&quot;", "&#039;", "&eacute;"]

        const words = currentQuestion.split(" ")
        for (let i = 0; i < characters.length; i++) {
          for (let y = 0; y < words.length; y++) {
            questionfixed = questionfixed.replace(`${htmlEntities[i]}`, `${characters[i]}`)
          }
        }
        if (selectedCategory === "All") {
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
        } else if (selectedCategory === current.category) {
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
    <div className=' h-full'>
      <Header />
      {start === false ?
        <div className='bg-zinc-800 my-0 mx-auto w-4/5 flex-col pt-6 pb-8 rounded-xl'>
          <p className='text-center text-blue-500 text-6xl'>Quizzical</p>
          <img className='h-40 my-8 mx-auto' src="https://cdn-icons-png.flaticon.com/512/6193/6193558.png" alt="quiz" />
          <div className='w-4/5 mx-auto flex flex-col gap-5 text-white text-3xl'>
            <p className='self-center'>Select the category of the questions</p>
            {/* text-black rounded-md text-center w-fit pt-2 pb-3 text-lg self-center text-1 */}
            <select className='form-select text-black rounded-md text-center' open={false} autoFocus={true} name="" id="" onChange={(event) => selectCategory(event)}>
                <option value="All">All</option>
                <option value="Science & Nature">Science & Nature</option>
                <option value="General Knowledge">General Knowledge</option>
                <option value="Entertainment: Music">Entertainment: Music</option>
                <option value="Entertainment: Television">Entertainment: Television</option>
                <option value="Animals">Animals</option>
                <option value="Sports">Sports</option>
                <option value="Entertainment: Cartoon & Animations">Entertainment: Cartoon & Animations</option>
                <option value="Entertainment: Japanese Anime & Manga">Entertainment: Japanese Anime & Manga</option>
                <option value="Entertainment: Video Games">Entertainment: Video Games</option>
                <option value="Entertainment: Comics">Entertainment: Comics</option>
                <option value="Science: Gadgets">Science: Gadgets</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Geography">Geography</option>
                <option value="Entertainment: Books">Entertainment: Books</option>
                <option value="Entertainment: Film">Entertainment: Film</option>
                <option value="Art">Art</option>
                <option value="History">History</option>
                <option value="Politics">Politics</option>
                <option value="Mythology">Mythology</option>
                <option value="Science: Computers">Science: Computers</option>
                <option value="Science: Mathematics">Science: Mathematics</option>
                <option value="Celebrities">Celebrities</option>
            </select>
            <p className='w-fit self-center'>How many questions: </p>
            <input className='text-black rounded-md text-center w-fit p-2 text-lg self-center' type="number" onChange={setNumberQ} placeholder='5' />
            <p className='w-fit self-center'>By default are 5 questions</p>
            <div className='bg-blue-500 hover:bg-blue-700 w-fit p-2 rounded-md self-center cursor-pointer' onClick={startNew}>Start</div>
          </div>
        </div>
        :
        questions === undefined || questions.length === 0 ? // I have to execute this one 
          <div className=''>
            <img className='' src="https://cdn-icons-png.flaticon.com/512/7188/7188144.png" alt="" />
            <p className='w-fit text-white text-5xl my-20 mx-auto'>SORRY SOMETHING HAPPENED, REFRESH THE PAGE</p>
            {/* <div className=''>
              <h1>Quizzical</h1>
              <img className='' src="https://cdn-icons-png.flaticon.com/512/3406/3406828.png" alt="quiz" />
            </div>
            <div>
              We are sorry, try again please
            </div> */}
          </div>
          :
          <div className='text-white bg-black pb-5'>
            {infoquestions()}
            {!checkAnswers
              ?
              (<div onClick={check} className='bg-blue-500 hover:bg-blue-700 w-fit p-2 rounded-md self-center cursor-pointer my-10 mx-auto'>
                Check answers
              </div>)
              :
              (
                <div className='flex flex-col gap-10 justify-center'>
                  <p className='text-2xl w-fit self-center mt-5'>You scored {goodAnswers}/{numberQuestions} correct answers</p>
                  <div className='w-fit flex gap-3 text-2xl self-center'>
                    <div className='bg-blue-700 hover:bg-blue-500  w-fit p-2 rounded-md self-center cursor-pointer' onClick={reset}>
                      Play Again
                    </div>
                    <div className='bg-blue-700 hover:bg-blue-500 w-fit p-2 rounded-md self-center cursor-pointer' onClick={home}>
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