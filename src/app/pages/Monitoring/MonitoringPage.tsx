import ConnectStomp from "./ConnectStomp";
import {StompSessionProvider} from 'react-stomp-hooks'

export default function MonitoringPage() {
  const WEBSOCKET_URL = process.env.WEBSOCKET_URL

  return (
    <div className={`card card-xxl-stretch mb-5 mb-xl-8`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Monitoring</span>
        </h3>
      </div>
      <div className='pt-5'>
        <StompSessionProvider
          url={WEBSOCKET_URL}
          // debug={(str) => {
          //   console.log(str)
          // }}
        >
          <ConnectStomp />
        </StompSessionProvider>
      </div>
    </div>
  )
}