import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import TextEditor from "./pages/TextEditor";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/document/:id" element={<TextEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
