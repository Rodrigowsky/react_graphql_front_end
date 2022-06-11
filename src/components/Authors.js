import { useState } from 'react'
import {useMutation } from '@apollo/client'
import { ALL_BOOKS, ADD_YEAR } from '../queries'

const Authors = (props) => {

  const [name, setName] = useState('')
  const [year, setYear] = useState('')

  const [addYear] = useMutation(ADD_YEAR, {
    refetchQueries: [ { query: ALL_BOOKS } ]  });

  const submit = async (event) => {
    event.preventDefault()
    
    console.log('add year...')
    // console.log(createBook)
    addYear({ variables: { name, year: parseInt(year) } })
   

    setName('')
    setYear('')
    
  }

  if (!props.show) {
    return null
  }

  
  let authors = [];
    
  authors = [...props.authors];
  console.log("authors",authors)

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.author + Math.random()}>
              <td>{a.author}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
      <h2>Set Birth Year</h2>
      <form onSubmit={submit}>
          <div>
            <select name="name" id="name-select" onChange={({ target }) => setName(target.value)}>
            <option value="">--Please choose an option--</option>
            {authors.map((a) => (
              <option key={a.author + Math.random()} value={a.author}>{a.author}</option>
          ))}
          </select>
          </div>
          <div>
          <input
              type="number"
              placeholder='Set Birth Year'
            value={year}
            onChange={({ target }) => setYear(target.value)}
          />
          </div>
          <button type="submit">Set Birth Year</button>
        </form>
      </div>
    </div>
  )
}

export default Authors