import {useReducer} from 'react'
export default function App() {
    function reducer(state, action){
        switch(action.type){
            case "ADD_ITEM" :
                return [...state,{id:Date.now(), name:action.payload}];
            case "DELETE_ITEM":
               return state.filter((item)=>item.id !== action.payload)
            case "UPDATE_ITEM":
                return state.map((item)=>(item.id ===action.payload.id ? {...item,name:action.payload.newName} : item))
        }
    }
   const initialState=[] 
    const [item,dispatch]=useReducer(reducer,initialState) 
    

    return(
        <>
        <h2>Product list </h2>
            <button onClick={()=>dispatch({type:"ADD_ITEM", payload:prompt("Enter the item ")})}>Add item</button>
            <ul>
                {item.map((item)=><li key={item.id}>
                    {item.name}
                    <button onClick={()=>dispatch({type:"UPDATE_ITEM", payload:{id : item.id, newName:prompt("Enter the item ",item.name)}})}>Update</button>
                    <button onClick={()=>dispatch({type:"DELETE_ITEM", payload: item.id})}>Delete</button>
                </li>)}
            </ul>
            
        </>
   
  )
    
}
    
       


