import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home"

function Products() {
  return <h2>About</h2>;
}

function Pricing() {
  return <h2>Pricing</h2>;
}

function Posts() {
  return <h2>Posts</h2>;
}

const { Header } = Layout;
function App() {
  return (
    <div className="App">
      <Header>
        <Router>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
          <Navigation />
        </Router>
      </Header>
    </div>
  );
}

function Navigation() {
  const location = useLocation();
  const { hash, pathname, search } = location;
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/posts?id=5">Posts</Link>
          </li>
          <li>
            <Link to="/#pricing">Pricing</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default App;
