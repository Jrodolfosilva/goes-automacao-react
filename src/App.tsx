import React from "react"
import About from "./components/about/About"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Services from "./components/services/Services"
import Functionality from "./components/functionality/Functionality"

function App() {

  return (
    <div className="App">
     <Header/>
     <Main/>
     <About/>
     <Services/>
     <Functionality/>
    </div>
  )
}

export default App
