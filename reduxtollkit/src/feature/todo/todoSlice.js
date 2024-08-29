import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState={   /** store er modhhe inital value ki thkbe, object and array 2 toy rakte pari */
    todos:[{id:1,text:"Hello World"}]   

}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload  /**user j input value ta send korbe seta payload er moddhe thkbe */
            }
            // update state in store
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{  /**action er moddhe ekta id send kora hoyeche j ta pyaload er moddhe ache */
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    } 
})
export const{addTodo,removeTodo}=todoSlice.actions

// store moddhe sob reducer gulor list chai. j reducer gulo store er moddhe thkbe sei gulor ei state update hbe
export default todoSlice.reducer;