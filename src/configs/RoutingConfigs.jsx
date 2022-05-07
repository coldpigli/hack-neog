import {Routes, Route} from "react-router-dom";
import { Fontjoy, Landing, Responsively } from "routes";
import { ColorContrast } from "Pages/colorContrast";

const RoutingConfigs = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/fontjoy" element={<Fontjoy/>}/>
        <Route path="/responsively" element={<Responsively/>}/>
        <Route path="/color-contrast" element= {<ColorContrast/>} />
    </Routes>
  )
}

export default RoutingConfigs