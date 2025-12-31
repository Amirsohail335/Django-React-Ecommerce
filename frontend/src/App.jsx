import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import ForgotPassword from "./views/auth/ForgotPassword";
import Logout from "./views/auth/Logout";
import CreatePassword from "./views/auth/CreatePassword";
import MainWrapper from "./layouts/MainWrapper";
import StoreHeader from "./base/StoreHeader";
import StoreFooter from "./base/StoreFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <StoreHeader />
        {/* // Wrap everything in the 'MainWrapper' component. */}
        <MainWrapper>
          <Routes>
            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/create-new-password" element={<CreatePassword />} />
          </Routes>
        </MainWrapper>
        <StoreFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
