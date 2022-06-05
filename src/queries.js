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

