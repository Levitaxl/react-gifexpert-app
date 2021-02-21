import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories=['One Punch','Samurai X','Dragon Ball'];
    
    const [categories, setCategories] = useState(['One Punch']);

    /* Se queda como referencia
    const handleAdd = ()=>{
        //No se debe usar el push
        //categories.push('HunterXHunter');
        //Utilizamos el spread para agregar el nuevo elemento, en este ejemplo se agrega al final
        setCategories([...categories,'HunterxHunter']);
    }*/



    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={setCategories}></AddCategory>
          <hr/>       
          <ol>
              {
                  categories.map(category=>(
                      <GifGrid 
                        key={category}
                        category={category}/>                  
                  ))
              }
          </ol>
            
        </>
    )
}
