import { gql } from '@apollo/client';

export const ALL_AUTHORS = gql`
query {
  allAuthors {
    author
    born
    bookCount
  }
}
`

export const ALL_BOOKS = gql`
query {
  allBooks {
    title
    author
    published
  }
}
`

export const CREATE_BOOK = gql`
mutation addBook($title: String!, $author: String!, $genres: [String!]!, $published: Int!) {
  addBook(title: $title, author: $author, genres: $genres, published: $published) {
    title,
    author
  }
}
`

export const ADD_YEAR = gql`
mutation EditAuthor($name: String!, $year: Int!) {
  editAuthor(name: $name, year: $year) {
    author
    born
    bookCount
  }
}
`