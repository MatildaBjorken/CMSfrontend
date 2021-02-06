import React, { useState, useEffect } from "react"

const urlCreate = "http://localhost:8090/api/createArticle.php"

export default function ShowForm(props){

    async function postData(e){
        e.preventDefault()
       
        let title = e.target.children[0].value
        let body = e.target.children[1].value
     
        let data = JSON.stringify({title:title, body: body})
        let addedArticle = await fetch(urlCreate, {
            method:'POST', body:data, 
            
    
    })
    window.location.reload(false);
    addedArticle= await addedArticle.json()
    props.toggleForm()
    props.updateArticle(addedArticle)
    data.innerText = "Hello World";
    }

    return  (
    
            <form className='addPostBtn' onSubmit={ e=> postData(e)}>
              
                <input type='text' placeholder="TITLE.."/>
                <textarea  rows="4" cols="50"></textarea>

                <button type="submit" className='submitBtn'>SUBMIT</button>
                <button type="button" onClick={props.toggleForm}>CANCEL</button>
            </form>
    )
}