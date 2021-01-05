
import React,{ useState ,useEffect} from "react"
import './App.css';
import Message from './Message'
import { Button } from '@material-ui/core';
import db from './firebase'
import { FormControl,Input,InputLabel,Card } from '@material-ui/core'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import logo from "./conversation.png"
//import ReactDOM from "react-dom"

function App(){


  //variable requires you to refresh to change 
  //state means no refresh required
  const [username ,setUsername]=useState("")
  const [input,setInput ]= useState('')
  //cannot hardcode use setState
  const [messages,setMessages]=useState([]);
  //useEffect used to run code on a condition

  useEffect(()=>{
  //run code here...
  //if it is blank [] , this code runs once when the app is connected
  setUsername(prompt('Please enter your Username'))
  }
  ,[])//condition
  //connecting with firebase
  useEffect(() => {
    //run once when the app component loads
    //importent
    //known as listener
    db.collection('messages') 
    .orderBy('timestamp','desc')
    .onSnapshot(
      snapshot=>{
        // snapshot.docs.map(doc =>({id: doc.id, message : doc.data()}))
        setMessages(snapshot.docs.map(doc =>({id: doc.id, message : doc.data()})))
      }
    )
  }, [])
  console.log(input);
  console.log(messages)
  const sendMessages =(event)=>{
    //prevents refreshing
    event.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // all the logic goes here
    //...message spreads all the messages

    // setMessages([...messages,{username: username,message: input}])
    //cleans the string
    setInput("")
  }

  return (

    <div className="App">
      
      <h1>Messenger</h1>
      <img src={logo} width="50" height="50" ></img>
      <h2>Welcome {username}</h2>
      {/* form refresh on submit */}
    <form className="form">
      {/* made using material ui */}
      <FormControl>
      <InputLabel >Enter message here ...</InputLabel>

      <Input value={input} onChange={
        event=>
        setInput(event.target.value)
      }/>

        <Button className='send' variant="contained" disabled={!input} color="primary" type='submit'
        onClick={sendMessages}>
        Send Message
        </Button>
      </FormControl>
      </form>

        <FlipMove>
       {
          //map is a powerful tool
          messages.map(({id,message})=>(
            //key is important
            <Message key ={id} username={username} message={message}/>
            // <p>{message}</p>
          ))
        }

        </FlipMove>

      
    </div>
  );
}


export default App;