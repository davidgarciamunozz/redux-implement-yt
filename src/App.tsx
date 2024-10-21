import CakeContainer from "./components/cakeContainer"
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import CakeHookContainer from "./components/cakeHookContainer"

function App() {

  return (
    
    <Provider store={store}> 
     <CakeContainer />
     <CakeHookContainer />
    </Provider>
    
  )
}

export default App
