import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import LoginForm from "./components/LoginForm";
function App() {
  return (
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
          </main>
          <footer className="container-xl"></footer>
        </div>
      </BrowserRouter>
    </body>
  );
}

export default App;
