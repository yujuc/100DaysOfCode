import React, {useReducer} from 'react'
import io from 'socket.io-client'

export const CTX = React.createContext();

/*
    msg {
        from: 'user'
        msg: 'hi'
        topic: 'general'
    }

    state {
        topic1: [
            {msg}, {msg}, {msg}, {new msg}
        ],
        topic2: [
            ...
        ]
    }
*/

const initState = {
    general: [
        {from: 'aaron', msg: 'hello'},
        {from: 'aaron', msg: 'hey'},
        {from: 'arnold', msg: 'wow'},
    ],
    topic2: [
        {from: 'aaron', msg: 'heeey'},
        {from: 'arnold', msg: 'yoooo'},
        {from: 'aaron', msg: 'www'},
    ]
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state, [topic]: [...state[topic],{from, msg}],
            }
        default:
            return state
    }
}

let socket;

function sendChatAction (value) {
    socket.emit('chat message', value);
}

export default function Store(props) {

    const [allChats, dispatch] = useReducer(reducer, initState);
    
    if (!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg){
            dispatch({type: 'RECEIVE_MESSAGE', payload: msg});
            // console.log({msg});
        })
    }

    const user = 'yuzu' + Math.floor(Math.random(100).toFixed(2)*100)

    // const reducerHook = React.useReducer(reducer, initState)
    
    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}
