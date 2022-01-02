import React, { Suspense, useContext } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Router, Redirect } from '@reach/router'
import { NavBar } from './components/NavBar'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={ <div/> }>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        { !isAuth && <NotRegisterUser path='/login' /> }
        { !isAuth && <Redirect noThrow from='/favs' to='/login' /> }
        { !isAuth && <Redirect noThrow from='/user' to='/login' /> }
        { isAuth && <Redirect noThrow from='/login' to='/' /> }
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
