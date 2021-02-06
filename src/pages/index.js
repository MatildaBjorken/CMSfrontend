import React, { useState, useEffect } from "react"

import Nav from '../components/nav'

import "../components/layout.css"


//useState hook to create some local state to hold posts and a setPosts function to update this state. default it to an empty array.
// useState allows our functional components which used to be stateless become stateful. 

const url = "http://localhost:8090/api/articles.php"

export default function Home() {
  const [articles, setArticles] = useState([])

  //The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

  //get all data 
  async function fetchData() {
    const data = await fetch(url, { method: "GET" }).then(data => data.json())
    setArticles(data.articles)
    console.log(data.articles)
  }

  //To get the posts from the Api use the useEffect hook to run when our component gets mounted

  useEffect(() => {
    fetchData()
  }, [])
  //onMount, the array never change, only when they change
  //empty array - when the DOM is changed - mounting

  //render the posts
  return (
    <main className='Post'>
      <Nav articles={articles} />
      <h1>heyheyhey !!!</h1>

      {articles.map(article => (
        <article className='listOfPosts article'>
          <h2>{article.title}</h2>
          <h4>{article.created_at}</h4>
          <p>{article.body}</p>
        </article>
      ))}
    </main>
  )
}