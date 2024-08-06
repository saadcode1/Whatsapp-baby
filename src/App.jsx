import Messanger from './components/Messanger';
import AccounProvider from './components/Context/AccountProvider';
import "./index.css";
import "./App.css";
function App() {

  return (
    <>
    <AccounProvider>
     <Messanger/>
     </AccounProvider>
    </>
  )
}

export default App
