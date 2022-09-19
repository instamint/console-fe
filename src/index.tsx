import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
// import {ReactQueryDevtools} from 'react-query/devtools'
// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
import {positions, Provider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {StompSessionProvider} from 'react-stomp-hooks'
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)
Chart.register(...registerables)

const optionsAlert = {
  offset: '25px',
  timeout: 3000,
  position: positions.TOP_RIGHT,
}

const queryClient = new QueryClient()
const container = document.getElementById('root')
const WEBSOCKET_URL = process.env.WEBSOCKET_URL

if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <MetronicI18nProvider>
        <AuthProvider>
          <Provider template={AlertTemplate} {...optionsAlert}>
            <StompSessionProvider
              url={WEBSOCKET_URL}
              debug={(str) => {
                console.log(str)
              }}
            >
              <AppRoutes />
            </StompSessionProvider>
          </Provider>
        </AuthProvider>
      </MetronicI18nProvider>
    </QueryClientProvider>
  )
}
