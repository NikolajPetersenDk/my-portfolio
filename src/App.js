import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import SinglePost from "./routes/SinglePost"
import Post from "./routes/Post"
import Project from "./routes/Project"
import Navbar from "./routes/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<About />} path='/about' />
        <Route element={<SinglePost />} path='/post/:slug' />
        <Route element={<Post />} path='/post' />
        <Route element={<Project />} path='/project' />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
