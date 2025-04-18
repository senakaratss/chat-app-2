import { useState } from "react";
import HomePage from "./pages/home/HomePage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <HomePage />
    </div>
  );
}

export default App;
