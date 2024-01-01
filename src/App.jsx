import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Head from './components/Head'
import { Provider } from 'react-redux'
import { store } from './store/store'
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Head/>
        <Outlet/>
      </Provider>
    </>
    
  )
}
