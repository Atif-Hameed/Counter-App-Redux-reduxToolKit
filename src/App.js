import { createContext } from "react";
import CompA from "./components/contextApi/CompA";
import Counter from "./components/redux/Counter";


const firstName = createContext()
const lastName = createContext()

function App() {
  return (
    <>
      <div className="overflow-hidden w-full h-screen">
        <lastName.Provider value={'Hameed'}>
          <firstName.Provider value={'Atif'} >
            <CompA />
          </firstName.Provider>
        </lastName.Provider>
        <Counter />
      </div>
    </>
  );
}

export default App;   //one export should always default the rest will be written in {}
export { firstName, lastName };   
