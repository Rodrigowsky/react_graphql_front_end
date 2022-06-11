import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../queries'

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const [ login, result ] = useMutation(LOGIN, {    onError: (error) => {
    console.log("ërrou")
  }
})
  useEffect(() => {
    console.log(result)
    if (result.data) {
      const token = result.data.login.value
      console.log("entrou")
      
      setToken(token)
      localStorage.setItem('books-user-token', token)
    }
  }, [result.data]) // eslint-disable-line

  const submit = async (event) => {
    console.log("entrou")
    event.preventDefault()
    login({ variables: { username, password } })
    
  }

  return (
    <div>
      Login
      <form onSubmit={submit}>
        <div>
          username <input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password <input
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default LoginForm