import ConnectStomp from "./ConnectStomp";

export default function MonitoringPage() {
  return (
    <div className={`card card-xxl-stretch mb-5 mb-xl-8`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Monitoring</span>
        </h3>
      </div>
      <div className='pt-5'>
        <ConnectStomp />
      </div>
    </div>
  )
}