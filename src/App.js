import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppPosts from "./components/AppPosts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />}></Route>
      <Route path="/posts" element={<AppPosts />}></Route>
    </Routes>
  );
}

export default App;
