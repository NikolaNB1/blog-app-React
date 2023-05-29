import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppPosts from "./components/AppPosts";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />}></Route>
      <Route path="/posts" element={<AppPosts />}></Route>
      <Route path="/post/:id" element={<SinglePost />}></Route>
    </Routes>
  );
}

export default App;
