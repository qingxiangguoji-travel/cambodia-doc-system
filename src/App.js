import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div>
    <h1>🏠 主页</h1>
    <p>这是主页内容 - 如果看到这个，说明路由工作正常</p>
    <Link to="/about">前往关于页面</Link>
  </div>
);

const About = () => (
  <div>
    <h1>📋 关于页面</h1>
    <p>这是关于页面内容</p>
    <Link to="/">返回主页</Link>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '10px', background: '#f0f0f0' }}>
          <strong>导航: </strong>
          <Link to="/" style={{ marginRight: '10px' }}>首页</Link>
          <Link to="/about">关于</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
