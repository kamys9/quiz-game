import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } =
    useGlobalContext()
  return <main>
    <div className='header'>
      <h1 className="title">Geek Quiz</h1>
    </div>
    <section className="quiz quiz-small">
      <form className='setup-form'>
        {/* amount */}
        <div className='form-control'>
          <label htmlFor='amount'>number of questions</label>
          <input type='number' name="amount" id="amount"
            value={quiz.amount}
            onChange={handleChange}
            className="form-input"
            min={1}
            max={50}
          />
        </div>
        {/* category */}

        <div className='form-control'>
          <label htmlFor="category">
            category
          </label>
          <select name="category" id="category" className="form-input" value={quiz.category} onChange={handleChange}>


            <option value="videogames">Video Games</option>
            <option value="boardgames">Board Games</option>
            <option value="computers">Computers</option>
            <option value="comics">Comics</option>
            <option value="gadgets">Gadgets</option>
            <option value="japan">Japanese Anime & Manga</option>
            <option value="cartoon">Cartoons & Animation</option>

            <option value="films">Films</option>
            <option value="books">Literature</option>








          </select>
        </div>
        {/* difficulty */}

        <div className='form-control'>
          <label htmlFor="difficulty">
            select difficulty
          </label>
          <select name="difficulty" id="difficulty" className="form-input" value={quiz.difficulty} onChange={handleChange}>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>

          </select>
        </div>
        {error && <p className="error">can't generate questions, please try different options</p>}
        <button type="submit" onClick={handleSubmit} className='submit-btn'>start</button>
      </form>
    </section>
  </main>


}

export default SetupForm
