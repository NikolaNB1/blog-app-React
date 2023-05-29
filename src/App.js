import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppPosts from "./components/AppPosts";
import SinglePost from "./components/SinglePost";
import AddPost from "./components/AddPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />}></Route>
      <Route path="/posts" element={<AppPosts />}></Route>
      <Route path="/post/:id" element={<SinglePost />}></Route>
      <Route path="/add" element={<AddPost />}></Route>
    </Routes>
  );
}

export default App;
