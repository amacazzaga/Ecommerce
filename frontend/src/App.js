import{BrowserRouter,Routes,Route}from"react-router-dom"
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <body>
    <div className="container-xxl">
    <BrowserRouter>
   <header>
    <navbar className="container-xl">
      <Navbar/>
    </navbar>
   </header>
   <main className="container-xl"></main>
   <footer className="container-xl"></footer>
    </BrowserRouter>
    </div>
    </body>
  );
}

export default App;
