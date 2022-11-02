import React from 'react'
import '../App.css'

function Dropdown(props) {
    // props.selectCategory()
    return (
        <div>
            <h6 className='title-dropdown'>Select the category of the questions</h6>
            <div className='box'>
                <select name="" id=""  onChange={(event) => props.selectCategory(event)}>
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
                </select>
            </div>
        </div>
  )
}

export default Dropdown