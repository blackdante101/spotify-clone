
import "./styles/index.css"
import "bootstrap/dist/css/bootstrap.css"
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={ <Navigation children={<Homepage/> }/>}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
