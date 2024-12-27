import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import MyAppBar from "./components/MyAppBar";
import Box from "@mui/material/Box";

function App() {
  return (
      <Box>
          <MyAppBar />
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="projects" element={<ProjectsPage />} />
              </Route>
          </Routes>
      </Box>
  );
}

export default App;
