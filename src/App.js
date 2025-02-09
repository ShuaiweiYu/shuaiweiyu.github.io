import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Box from "@mui/material/Box";
import MyAppBar from "./components/MyAppBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import RecipeEditor from "./pages/projects/RecipeEditor";

function App() {
    return (
        <Box>
            <MyAppBar/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="projects" element={<ProjectsPage/>}/>
                    <Route path="contact" element={<ContactPage/>}/>
                    <Route path="projects/lego/receipe-editor" element={<RecipeEditor/>}/>
                </Route>
            </Routes>
        </Box>
    );
}

export default App;
