import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Form from "./components/Form.js";
// ..
AOS.init();

loadProgressBar();

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} /> */}

          <Route path="home" element={<Home />} />
          <Route path="form" element={<Form/>} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page in Deveploment!</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
