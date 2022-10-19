import React from 'react'
import '../App.css'

function Question(props) {
    // console.log(props)
    const answersArr = props.answers;

    const answers = answersArr.map((current, index) => {
        if(props.checked){
            if(current.option===true){
                return (
                    <div className="good--answer" key={index}>
                        <h4>{current.answer}</h4>
                    </div>
                )
            }
            else if(current.selected && current.option===false){
                return (
                    <div className="bad--answer" key={index}>
                        <h4>{current.answer}</h4>
                    </div>
                )
            }
            else if(current.selected===false && current.option===false)
            return (
                <div className="none--answer" key={index}>
                    <h4>{current.answer}</h4>
                </div>
            )
        }
        return (
            <div className={current.selected ? 'answer-selected' : 'answer'} onClick={() => props.select(props.id, index)} key={index}>
                <h4>{current.answer}</h4>
            </div>
        )
        
    })

    let category = () => {
        let type = ""
        let img = ""

        // console.log(props.category)

        switch(props.category){
            case "Science & Nature":
                type = "science"
                img = "https://cdn-icons-png.flaticon.com/512/2022/2022299.png"
            break;

            case "General Knowledge":
                type = "general"
                img = "https://cdn-icons-png.flaticon.com/512/1946/1946042.png"
            break;

            case "Entertainment: Music":
                type = "music"
                img = "https://cdn-icons-png.flaticon.com/512/2995/2995101.png"
            break;

            case "Entertainment: Television":
                type = "tv"
                img = "https://cdn-icons-png.flaticon.com/512/4358/4358295.png"
            break;

            case "Animals":
                type = "animals"
                img = "https://cdn-icons-png.flaticon.com/512/3397/3397536.png"
            break;

            case "Entertainment: Cartoon & Animations":
                type = "cartoon"
                img = "https://cdn-icons-png.flaticon.com/512/5190/5190335.png"
            break;

            case "Entertainment: Japanese Anime & Manga":
                type = "anime"
                img = "https://cdn-icons-png.flaticon.com/512/1881/1881021.png"
            break;

            case "Entertainment: Video Games":
                type = "videoGames"
                img = "https://cdn-icons-png.flaticon.com/512/2333/2333545.png"
            break;

            case "Entertainment: Comics":
                type = "comics"
                img = "https://cdn-icons-png.flaticon.com/512/626/626610.png"
            break;

            case "Science: Gadgets":
                type = "gadgets"
                img = "https://cdn-icons-png.flaticon.com/512/3659/3659898.png"
            break;

            case "Vehicles":
                type = "vehicles"
                img = "https://cdn-icons-png.flaticon.com/512/741/741407.png"
            break;

            case "Geography":
                type = "geography"
                img = "https://cdn-icons-png.flaticon.com/512/869/869196.png"
            break;

            case "Entertainment: Books":
                type = "books"
                img = "https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
            break;

            case "Entertainment: Film":
                type = "film"
                img = "https://cdn-icons-png.flaticon.com/512/745/745752.png"
            break;

            case "Art":
                type = "art"
                img = "https://cdn-icons-png.flaticon.com/512/2400/2400603.png"
            break;

            case "History":
                type = "history"
                img = "https://cdn-icons-png.flaticon.com/512/2682/2682065.png"
            break;

            case "Sports":
                type = "sports"
                img = "https://cdn-icons-png.flaticon.com/512/857/857455.png"
            break;
            
            default:
            break;

        }
        
        return [type, img]
        // return type
    }
    

    return (
        <div className='question--box'>
            <h4
                className={props.difficulty}
            >Difficulty: {props.difficulty}</h4>
            <div className='category'>
                <h4
                    className={category()[0]}
                >Category: {props.category}</h4>
                <img src={category()[1]} alt={category()[0]} className="category--img"/>
            </div>
            <h2 className='question--title'>{props.question}</h2>
            <div className='answers'>
                {answers}
            </div>
            <br />
            <hr />
        </div>
    )
}

export default Question