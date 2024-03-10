import { ThemeProvider } from './ThemeContext';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Project from './Pages/Project'
import Sertifikat from './Pages/Sertifikat'



const App = () => {
  return (
    <Router>
      <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/certificates" element={<Sertifikat />}/>
      </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App
