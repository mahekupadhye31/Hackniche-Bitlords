import { Container } from '@mui/system'
import React from 'react'
import Chatbot from 'react-simple-chatbot'

function ChatBot() {
    const steps = [
        {
            id:'Greet',
            message:'hello welcome to site',
            trigger:"Ask Name"
          },
          {
            id:'Ask Name',
            message:'Please enter your name',
            trigger:'waiting1'
          },
          {
            id:'waiting1',
            user:true,
            trigger:'Name'
          },
          {
            id:'Name',
            message:'Hi {previousValue} , Please select your issue',
            trigger:'issues'
          },
          {
            id:'issues',
            options:[
              {
                value:'React',
                label:'React',
                trigger:"React"
              },
              {
                value:'NodeJS',
                label:'NodeJS',
                trigger:"NodeJS"
              }
            ]
          },
          {
            id:'React',
            message:'Whats your exact problem..?',
            trigger:'check1'
      
          },
          {
            id:'check1',
            user:true,
            trigger:'Problem'
          },
          {
            id:'Problem',
            message:"We got your issue",
            end:true
          },
          {
            id:'NodeJS',
            message:"We got your issue",
            end:true
          }
    ]
  return (
    <div className='chatbotcl'>
      <Container sx={{textAlign:'center'}}>
        {/* <h1>Hello chat bot</h1> */}
        <div className="centerbot">
        <Chatbot steps={steps} />
        </div>
        
      </Container>
    </div>
  )
}

export default ChatBot
