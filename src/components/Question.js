import React from 'react'
// import '../App.css'

function Question(props) {
    // console.log(props)
    const answersArr = props.answers;

    const answers = answersArr.map((current, index) => {
        let answerfixed = current.answer
        let characters = [`& `, `<`, `>`, `"`, `'`, "é"]
        let htmlEntities = ["&amp; ", "&lsquo;", "&rsquo;", "&quot;", "&#039;", "&eacute;"]

        const words = answerfixed.split(" ")
        for (let i = 0; i < characters.length; i++) {
          for (let y = 0; y < words.length; y++) {
            answerfixed = answerfixed.replace(`${htmlEntities[i]}`, `${characters[i]}`)
          }
        }

        if(props.checked){
            if(current.option===true){
                return (
                    <div className='bg-green-700 w-fit p-2 rounded-md self-center' key={index}>
                        <p>{answerfixed}</p>
                    </div>
                )
            }
            else if(current.selected && current.option===false){
                return (
                    <div className='bg-red-700 w-fit p-2 rounded-md self-center' key={index}>
                        <p>{answerfixed}</p>
                    </div>
                )
            }
            else if(current.selected===false && current.option===false)
            return (
                <div className='bg-gray-700 w-fit p-2 rounded-md self-center' key={index}>
                    <p>{answerfixed}</p>
                </div>
            )
        }
        return (
            <div className={current.selected ? 'bg-blue-700 hover:bg-blue-500 w-fit p-2 rounded-md self-center cursor-pointer' : 'bg-gray-500 hover:bg-gray-700 w-fit p-2 rounded-md self-center cursor-pointer'} onClick={() => props.select(props.id, index)} key={index}>
                <p>{answerfixed}</p>
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

            case "Politics":
                type = "politics"
                img = "https://cdn-icons-png.flaticon.com/512/1651/1651652.png"
            break;

            case "Mythology":
                type = "mythology"
                img = "https://cdn-icons-png.flaticon.com/512/4793/4793111.png"
            break;

            case "Science: Computers":
                type = "computers"
                img = "https://cdn-icons-png.flaticon.com/512/1865/1865273.png"
            break;

            case "Science: Mathematics":
                type = "mathematics"
                img = "https://cdn-icons-png.flaticon.com/512/897/897368.png"
            break;

            case "Celebrities":
                type = "celebrities"
                img = "https://cdn-icons-png.flaticon.com/512/2454/2454273.png"
            break;
            
            default:
            break;

        }
        
        return [type, img]
        // return type
    }
    

    function getEmote(difficulty){
        switch(difficulty){
            case "easy":
                return "https://cdn-icons-png.flaticon.com/512/3285/3285462.png";

            case "medium":
                return "https://cdn-icons-png.flaticon.com/512/3285/3285623.png";

            case "hard":
                return "https://cdn-icons-png.flaticon.com/512/3285/3285432.png";

            default:
            return "";
        }
    }

    return (
        <div className='bg-zinc-800 my-0 mx-auto w-4/5 flex-col pt-6 text-white text-lg p-5'>
            <div className='flex items-center gap-2'>
                <p className={props.difficulty}>Difficulty: {props.difficulty}</p>
                <img className='h-10' src={getEmote(props.difficulty)} alt="" />
            </div>
            <div className='w-fit flex justify-center gap-2'>
                <p className='text-2xl self-start'>Category: {props.category}</p>
                <img className='h-10' src={category()[1]} alt={category()[0]}/>
            </div>
            <p className='text-3xl mb-5'>{props.question}</p>
            <div className=' flex justify-center flex-nowrap gap-3'>
                {answers}
            </div>
            <br />
            <hr />
        </div>
    )
}

export default Question