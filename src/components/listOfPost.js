import React, { useState, useEffect } from "react"
import DeletePost from "./delete"
import UpdatePostForm from './editForm'
import EditBtn from './editBtn'

export default function ListOfPost(props){
    const [openForm, setOpenForm] = useState(false)

    const[visible, setVisible] = useState(3)
    const showMoreItems = () => {
        setVisible((prevValue)=> prevValue +3)
      }
    /*
     async function getPost(id){
        await fetch(`http://localhost:8090/api/single_articles.php?id=${id}`, 
        { method: 'GET' 
    }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                displayForm(resp)
            })
        })
      }
      */
     function toggleForm(){
        setOpenForm(!openForm)
    }
      function displayForm(articleItem){
        if (openForm){
            return<displayForm toggleForm={toggleForm} />
        } else{
            return  <button  onClick={toggleForm} >edit</button>
    
        }

      }
      

    

    return  (
        
        
        <div className='Post'>
            
    <ul className='ulPost'>
        {props.articles.slice(0,visible).map(articles=>{
            
            return(
                
                <>
                  
                <li className='listOfPosts'>
            <h2 className='InsidePost'>{articles.title}</h2>
            <h4 className='InsidePost'>{articles.created_at}</h4>
            <p className='InsidePost'>{articles.body}</p>
                <button  onClick={()=>DeletePost(articles.id) } >delete</button>
              
                <div className='specBtn'>  <button onClick={()=>displayForm()} onClick={toggleForm}>edit!</button>
               
                </div>

            <form className='editForm' >
              
              <input type='text' placeholder="TITLE.." value={articles.title}/ >
              <textarea  rows="4" cols="50" value={articles.body}></textarea>
              <button type="submit" className='editBtn'>SUBMIT</button>
              <button type="button" className='editBtn' onClick={props.toggleForm}>CANCEL</button>
          </form>
              

                </li>
               
            </>
            )
            
        })}

    </ul>
    <div>
    <button onClick={showMoreItems}>load more</button>
    </div>
    </div>
    
    )
    
}