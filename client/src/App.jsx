import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import {BrowserRouter as Router, Route , Routes, Link} from "react-router-dom";
//Switch React V5 => Routes React V6
function App() {
 // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  return (
    <div className="App">
        <Router>
            <div className="navbar">
                <Link to="/"> Home Page</Link>
                <Link to="/createpost"> Create A Post</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/createpost" element={<CreatePost></CreatePost>}/>
                <Route path="/post/:id" element={<Post></Post>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
