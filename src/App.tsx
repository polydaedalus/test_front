import React, { lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from 'iridiumfinance'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
// import { usePollCoreFarmData, useFetchProfile, usePollBlockNumber } from 'state/hooks'
import { usePollCoreFarmData, usePollBlockNumber } from 'state/hooks'
import { DatePickerPortal } from 'components/DatePicker'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/PageLoader'
// import EasterEgg from './components/EasterEgg'
import history from './routerHistory'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  usePollBlockNumber()
  useEagerConnect()
  // useFetchProfile()
  usePollCoreFarmData()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Farms tokenMode/>
            </Route>
            {/* <Route path="/auto">
              <Pools />
            </Route> */}
            
            {/* Redirect */}
            <Route path="/staking">
              <Redirect to="/farms" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/farms" />
            </Route>

            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      {/* <EasterEgg iterations={2} /> */}
      <ToastListener />
      <DatePickerPortal />
    </Router>
  )
}

export default React.memo(App)
