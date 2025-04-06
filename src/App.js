import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Box from "@mui/material/Box";
import MyAppBar from "./components/MyAppBar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import RecipeEditor from "./pages/projects/RecipeEditor";
import PlcConnect from "./pages/projects/PlcConnect";
import SafeGuard from "./pages/projects/SafeGuard";
import CollaborationModule from "./pages/projects/CollaborationModule";
import PL24Upload from "./pages/projects/PL24Upload";
import PL24Bidata from "./pages/projects/PL24Bidata";
import PL24DealerMonitor from "./pages/projects/PL24DealerMonitor";

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
                    <Route path="projects/lego/plc-connect" element={<PlcConnect/>}/>
                    <Route path="projects/siemens/safe-guard" element={<SafeGuard/>}/>
                    <Route path="projects/siemens/collaboration-module" element={<CollaborationModule/>}/>
                    <Route path="projects/lexcom/pl24-upload" element={<PL24Upload/>}/>
                    <Route path="projects/lexcom/pl24-bidata" element={<PL24Bidata/>}/>
                    <Route path="projects/lexcom/pl24-dealer-monitor" element={<PL24DealerMonitor/>}/>
                </Route>
            </Routes>
        </Box>
    );
}

export default App;
