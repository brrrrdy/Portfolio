import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageChange";
import { ThemeProvider } from "./components/ThemeChange";
import Layout from "./components/Layout";
import HomePage from "./components/pages/Homepage";
import AllProjects from "./components/pages/AllProjects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="projects" element={<AllProjects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
