import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

import Nav from "./routes/navigation/navigation.component";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App;
