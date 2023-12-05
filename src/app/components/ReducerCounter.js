import { useReducer } from "react"

function reducerCounter(state, action) {
    switch (action.type){
        case "inc":
            // break
            return {counter : state.counter + 1 }
        case "dec":
            // break
            return {counter : state.counter - 1}
    }
    return state
}

export default function ReducerCounter(){
    const initialValue = {
        counter : 0
    }
    const [newState, dispatch] = useReducer(reducerCounter, initialValue)

    const incHandler = () => {
        dispatch({
            type : "inc"
        })
    }

    const decHandler = () => {
        dispatch({
            type : "dec"
        })
    }

    return (
        <div>
            <button type={"button"} onClick={incHandler} >+</button>
            counter : { newState.counter }
            <button type={"button"} onClick={decHandler} >-</button>
        </div>
)
}