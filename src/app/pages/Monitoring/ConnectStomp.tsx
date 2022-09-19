import { useState } from 'react'
import {useSubscription} from 'react-stomp-hooks'

export default function ConnectStomp() {
  const [message, setMessage] = useState('')
  
  useSubscription('/feeds/kafka', (message) => {
    console.log(message.body)
    message.body && setMessage(message.body)
  })
  useSubscription('/user/feeds/stockquotes', (message) => {
    console.log(message.body)
    message.body && setMessage(message.body)
  })
  useSubscription('/user/feeds/hello', (message) => {
    console.log(message.body)
    message.body && setMessage(message.body)
  })

  return <div className='mt-3 mb-3 d-flex justify-content-center'>{message}</div>
}