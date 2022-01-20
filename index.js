import React from "react";

export default function Ingredient({ingredient}) {
    
    return(
        
        <div>
            
                <h1>{ingredient?.strIngredient}</h1>
                <p>{ingredient?.strDescription}</p>
            

        </div>
    )
}