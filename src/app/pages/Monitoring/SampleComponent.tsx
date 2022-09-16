import { useState } from "react"
import { useSubscription } from "react-stomp-hooks"

export default function SampleComponent() {
  const [lastMessage, setLastMessage] = useState('No message received yet')
  console.log('lastMessage', lastMessage)

  useSubscription('/user/feeds/hello', (message) => setLastMessage(message.body))

  return <div></div>
}