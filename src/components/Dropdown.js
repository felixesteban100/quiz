import React from 'react'
// import '../App.css'

function Dropdown(props) {
    // props.selectCategory()
    return (
        <div className='flex-row'>
            <p className='text-white text-3xl'>Select the category of the questions</p>
            <select className='rounded-sm text-center w-fit p-2 text-lg' open={false} autoFocus={true} name="" id="" onChange={(event) => props.selectCategory(event)}>
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
        </div>
  )
}

export default Dropdown