import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            author {
              bio
              name
              id
              photo {
                url
              }
            }
          }
        }
      }
    }    
  }
`;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
export const getPosts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  return result;
};
export const getRecentPosts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  return result.json();
  // fetch("https://graphqlzero.almansi.me/api", {
  //   method: "POST",
  //   headers: { "content-type": "application/json" },
  //   body: JSON.stringify({
  //     query: `{
  //     user(id: 1) {
  //       id
  //       name
  //     }
  //   }`,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then(console.log('j'));
  // { "data": { "user": { ... } } }
};
export const getSimPosts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  return result.json();
};
export const getCats = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/comments");
  return result.json();
};
export const getPostDetails = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return result;
};
export const getComments = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );
  return result.json();
};

export default async function submitComment(obj) {}
