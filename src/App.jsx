import Router from "./Router/Router";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return <Router />;
};

export default App;
