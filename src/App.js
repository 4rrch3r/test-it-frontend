//import Login from"./components/auth/Login"
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import "./App.css";
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from './pages/Register'
import PrivateRoutes from './components/PrivateRoutes';
import Results from './pages/Results';

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1.8rem",
          },
        }}
      />
      <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/results" element={<Results/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload....
          </p>
          <Login/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;

// import React from 'react';
// import { Toaster } from 'react-hot-toast';
// import { Routes, Route } from 'react-router-dom';
// import PrivateRoutes from './Components/PrivateRoutes';
// import Auth from './pages/Auth';
// import EditProfile from './pages/EditProfile';
// import Home from './pages/Home';

// function App() {
//   return (
//     <>
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           style: {
//             fontSize: '1.8rem',
//           },
//         }}
//       />
//       <Routes>
//         <Route element={<PrivateRoutes />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/edit-profile" element={<EditProfile />} />
//         </Route>
//         <Route path="/auth" element={<Auth />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
