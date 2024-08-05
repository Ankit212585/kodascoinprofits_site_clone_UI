import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Index from "./NewProject/topbar";
// import Home from "./AdminPanel";

function App() {
  return (
    <div>
      <PrimeReactProvider>
        <Index />
        {/* <Home /> */}
      </PrimeReactProvider>
    </div>
  );
}

export default App;
