import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />}></Route>
    </Routes>
  );
}

export default App;
