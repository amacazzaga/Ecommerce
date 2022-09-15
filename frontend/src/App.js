import{BrowserRouter,Routes,Route}from"react-router-dom"
function App() {
  return (
    <body>
    <div className="container-xxl">
    <BrowserRouter>
   <header>
    <navbar>navbar</navbar>
   </header>
   <main>main</main>
   <footer>footer</footer>
    </BrowserRouter>
    </div>
    </body>
  );
}

export default App;
