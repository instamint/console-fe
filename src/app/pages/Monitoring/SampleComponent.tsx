import {useSubscription} from 'react-stomp-hooks'

export default function ConnectStompComponent() {
  useSubscription('/feeds/kafka', (message) => {
    console.log(message.body)
  })

  return <div></div>
}
