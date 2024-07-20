 

import {useState} from 'react'
export default function App() {
    const [item, setItem]=useState([])

    const handleItem = (itemName)=>{
        setItem([...item,{ id:Date.now(), name:itemName}])
    }

    const handleDelete = (id)=>{
        setItem(item.filter((item)=>item.id!==id))
    }

    const handleUpdate =(id, itemName)=>{
        setItem(item.map((item)=>(item.id ===id ? {...item,name:itemName}:item)))
    }

    return(
        <>
        <h2>Product list {item.length}</h2>
            <button onClick={()=>handleItem(prompt("Enter the item"))}>Add item</button>
            <ul>
                {item.map((item,index)=><li key={item.id}>{item.name}
                    <button onClick={()=>handleUpdate(item.id, prompt("Enter the item" , item.name))}>Update</button>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    
                    
                </li>)}
            </ul>
            
        </>
   
  )
    
}
    
       


