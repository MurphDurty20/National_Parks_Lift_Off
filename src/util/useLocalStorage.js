// import { useEffect, useState } from "react";

// function useLocalState(defaultValue, key){
//     const [value, setValues] = useState(() => {
       
//         const localStorageValue = window.localStorage.getItem(key);
//         console.log(defaultValue)
        
//         return localStorageValue !== null
//         ?JSON.parse(localStorageValue)
//         : defaultValue
//     })
//     // console.log(value)

//     useEffect(() => {
//         debugger
//         window.localStorage.setItem(key, JSON.stringify(value))
//     }, [key, value])

//     return [value, setValues]
// }

// export {useLocalState};