import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration ";
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
                <Link to="/login"> Login</Link>
                <Link to="/registration "> Registration</Link>

            </div>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/createpost" element={<CreatePost></CreatePost>}/>
                <Route path="/post/:id" element={<Post></Post>}/>
                <Route path="/login" element={<Login></Login>}/>
                <Route path="/registration" element={<Registration></Registration>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
