import {createContext,useContext} from "react";


export const TheamContext=createContext({
    themeMode:'light',
    darkTheam:()=>{},
    lightTheam:()=>{}
})
// create provider
export const TheamProvider = TheamContext.Provider

// use custome hooks for use store
 export default function useTheam(){
    return useContext(TheamContext)
 }
