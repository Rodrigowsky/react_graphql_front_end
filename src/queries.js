import { gql } from '@apollo/client';

const ALL_AUTHORS = gql`
query {
  allAuthors {
    author
    born
    bookCount
  }
}
`

export default ALL_AUTHORS;