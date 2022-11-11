import Card from "./components/Card"
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Blog1 from "./components/blog1";
import Blog2 from "./components/blog2"
import Blog3 from "./components/blog3"

function App(){
  return(<div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog1" element={<Blog1/>}/>
        <Route path="/blog2" element={<Blog2/>}/>
        <Route path="/blog3" element={<Blog3/>}/>
      </Routes>
    </Router>

    
      
  </div>)
}

function Home(){
  return(<div>
        <Card/>
  </div>)
}


export default App;