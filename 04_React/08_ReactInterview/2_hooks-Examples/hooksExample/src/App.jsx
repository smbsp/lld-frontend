import './App.css'
import Counter from './components/useStateExample'
import CountUseReducer from './components/useReducer'
import Form from './components/useReducerComplex'
import CounterClass from './fewMoreComponents/CounterClass'
import UseMemoConcept from './fewMoreComponents/useMemo'
import UseCallbackConcept from './fewMoreComponents/useCallBack'
import ParentComponent from './classbasedComponents/pureComponent'

function App() {

  return (
    <>
      {/* <Counter /> */}
      {/* <CountUseReducer /> */}
      {/* <Form /> */}
      {/* <CounterClass /> */}
      {/* <UseMemoConcept /> */}
      {/* <UseCallbackConcept /> */}
      <ParentComponent />
    </>
  )
}

export default App
