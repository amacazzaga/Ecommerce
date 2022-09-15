import{BrowserRouter,Routes,Route}from"react-router-dom"
import Navbar from "./components/Navbar";
function App() {
  return (
    <body>
    <div className="container-xxl">
    <BrowserRouter>
   <header>
    <navbar>
      <Navbar/>
    </navbar>
   </header>
   <main>main</main>
   <footer>footer</footer>
    </BrowserRouter>
    </div>
    </body>
  );
}

export default App;
