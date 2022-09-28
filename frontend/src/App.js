import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SingInForm from "./components/SingInForm";
import { DataProvider } from "./context/UserContext";


function App() {
  return (
    <DataProvider>
    <body>
      <BrowserRouter>
        <div className="container-xxl">
          <header>
            <navbar className="container-xl">
              <Navbar />
            </navbar>
          </header>
          <main className="container-xl">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
            </Routes>
            <Routes>
              <Route path="/sign" element={<SingInForm />} />
            </Routes>         
          </main>
          <footer className="container-xl"></footer>
        </div>
      </BrowserRouter>
    </body>
    </DataProvider>
  );
}

export default App;
