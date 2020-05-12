import React, {useState} from 'react'



export const useLocalStorage =() => {
    const [value, setValue] = useState(() =>{
        if(window.localStoraga.getitem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
    )}
        return initialValue
    }
    return (
        <div>
            Hello World
        </div>
    )
}
