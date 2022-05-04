import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Protected from './components/Protected';

function App() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<Protected isLoggedIn={isLoggedIn}>
          <AddProduct /></Protected>} />
        <Route path="/update" element={<Protected isLoggedIn={isLoggedIn}>
          <UpdateProduct /></Protected>} />
      </Routes>
    </div>
  );
}

export default App;
