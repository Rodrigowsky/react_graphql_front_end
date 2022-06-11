import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import LoginForm from "./components/LoginForm";
import { useQuery } from "@apollo/client";
import { ALL_AUTHORS, ALL_BOOKS } from "./queries";
import { useApolloClient } from '@apollo/client';


const App = () => {
  const [token, setToken] = useState(null);

  const [page, setPage] = useState("authors");

  const resultAT = useQuery(ALL_AUTHORS, { pollInterval: 2000 });
  const resultBK = useQuery(ALL_BOOKS, { pollInterval: 2000 });

  const client = useApolloClient();


  if (resultAT.loading || resultBK.loading) {
    return <div>loading...</div>;
  }

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  if (!token) {
    return <LoginForm setToken={setToken} />;
  } else {
    return (
      <div>
        <div>
          <button onClick={() => setPage("authors")}>authors</button>
          <button onClick={() => setPage("books")}>books</button>
          <button onClick={() => setPage("add")}>add book</button>
          <button onClick={logout}>logout</button>
        </div>

        <Authors show={page === "authors"} authors={resultAT.data.allAuthors} />

        <Books show={page === "books"} books={resultBK.data.allBooks} />

        <NewBook show={page === "add"} />
      </div>
    );
  }
};

export default App;
