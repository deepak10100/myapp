import Home from "./components/Home";
import React,{ createContext} from 'react'

let userContext = createContext()
function App() {
  // const [user, setUser] = useState("deepak");
  return (
<>

 <Home />

</>
  );
}

export default App;
export {userContext}
