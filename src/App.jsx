import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import appStore from '../utils/appstore'
import Body from './components/Body'
import { Provider } from 'react-redux'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>


<Provider store={appStore}>

   <Body/>
</Provider>






    </>
  )
}

export default App
