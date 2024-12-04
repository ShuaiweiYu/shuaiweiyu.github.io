import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import MyAppBar from "./components/MyAppBar";
import Box from "@mui/material/Box";

function App() {
  return (
      <Box>
          <MyAppBar />
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
              </Route>
          </Routes>
      </Box>
  );
}

export default App;
