import { Routes,Route } from "react-router-dom";
import ROUTES from "./routes";
import HooksAndCore from "./layouts/HooksAndCore";
function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOOKS_AND_CORE} element={<HooksAndCore/>}/>
    </Routes>
  )
}

export default App
