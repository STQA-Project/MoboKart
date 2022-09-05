import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
