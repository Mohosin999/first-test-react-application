import { Router } from "@gatsbyjs/reach-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ClockPage from "./pages/Clock";
import Task from "./pages/Task";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Contact path="/contact" />
      <ClockPage path="/clock" />
      <Task path="/task" />
    </Router>
  );
}
export default App;
