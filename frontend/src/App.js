import{BrowserRouter,Routes,Route}from"react-router-dom"
import Navbar from "./components/Navbar";
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
   <main className="container-xl">main</main>
   <footer className="container-xl">footer</footer>
    </BrowserRouter>
    </div>
    </body>
  );
}

export default App;
