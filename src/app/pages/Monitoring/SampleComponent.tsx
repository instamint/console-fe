import {useSubscription} from 'react-stomp-hooks'

export default function ConnectStompComponent() {
  useSubscription('/user/feeds/hello', (message) => {
    console.log(message.body)
  })

  return <div></div>
}
