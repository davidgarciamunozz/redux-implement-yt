import CakeContainer from "./components/cakeContainer"
import { Provider } from 'react-redux'
import { store } from "./redux/store"

function App() {

  return (
    
    <Provider store={store}> 
     <CakeContainer />
    </Provider>
    
  )
}

export default App