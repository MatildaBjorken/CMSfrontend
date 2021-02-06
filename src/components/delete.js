import React, { useState, useEffect } from "react"

//const urlDelete = "http://localhost:8090/api/deleteArticles.php"

export default function DeletePost(id){

            async function DeletePost() {
                alert(id)
                window.location.reload(false);
                await fetch(`http://localhost:8090/api/deleteArticle.php?id=${id}`, 
                { method: 'DELETE' 
            }).then((result)=>{
                    result.json().then((resp)=>{
                        console.warn(resp)
                    })
                })

            }
          
            DeletePost(id);

        // DELETE request using fetch with async/await
        
 
}
