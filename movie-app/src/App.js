import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
function App() {
  return <Router>
    <Route>
      <Route path="/">
        <Home />
      </Route>
    </Route>
  </Router>;
}

export default App;