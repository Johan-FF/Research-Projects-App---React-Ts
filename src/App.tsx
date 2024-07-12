import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Student from "./pages/Student";
import Research from "./pages/Research";
import Editor from "./pages/Editor";

function App() {
  const { token } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/student"
          element={token ? <Student /> : <Navigate to="/" />}
        />
        <Route
          path="/research"
          element={token ? <Research /> : <Navigate to="/" />}
        />
        <Route
          path="/editor"
          element={token ? <Editor /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
