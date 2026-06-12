import { Routes,Route } from "react-router-dom";
import ROUTES from "./routes";
import HooksAndCore from "./layouts/HooksAndCore";
import StateManagement from "./layouts/StateManagement";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOOKS_AND_CORE} element={<HooksAndCore/>}/>
      <Route path={ROUTES.STATE_MANAGEMENT} element={<StateManagement/>} />
    </Routes>
  )
}

export default App
