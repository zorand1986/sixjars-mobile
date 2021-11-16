import { gql } from "@apollo/client";

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    message
    token
    user {
        id
        email
    }
  }
}
`;

export const SIGNUP = gql`
mutation signup($email: String!, $password: String!) {
  signup(email: $email, password: $password) {
    message
    token
    user {
        id
        email
    }
  }
}
`;
