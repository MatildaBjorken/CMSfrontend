import React, { useState, useEffect } from "react"
import UpdatePostForm from './editForm'
//const urlDelete = "http://localhost:8090/api/deleteArticles.php"

export default function UpdatePost(props){

    const [title, setTitle] = useState(props.title || "")
    const [body, setBody] = useState(props.body || "")
  
    const updateTitle = e => setTitle(e.target.value)
    const updateBody = e => setBody(e.target.value)
  
    const UpdatePost = e => {
      e.preventDefault()
      title && body ? props.updatePost({ title, body, id: props.id }) : void 0
     
    }


        // DELETE request using fetch with async/await
        return  (
    
            <form className='editForm' >
              
                <input type='text' placeholder="TITLE.."  onChange={UpdatePostForm }/ >
                <textarea  rows="4" cols="50" onChange={UpdatePostForm }></textarea>
                <button type="submit" className='editBtn'>SUBMIT</button>
                <button type="button" className='editBtn' onClick={props.toggleForm}>CANCEL</button>
            </form>
    )
}
