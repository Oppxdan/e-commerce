import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

import Nav from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

function App() {

  const Shop = () => {
    return (
      <h1>I am the shop page</h1>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="sign-in" element={<SignIn />}/>
      </Route>
    </Routes>
  )
}

export default App;
