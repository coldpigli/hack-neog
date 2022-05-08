import {Routes, Route} from "react-router-dom";
import { ColorContrast } from "routes/ColorContrast/ColorContrast";
import { Fontjoy, Landing, Lighthouse, Responsively } from "routes";

const RoutingConfigs = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/fontjoy" element={<Fontjoy/>}/>
        <Route path="/responsively" element={<Responsively/>}/>
        <Route path="/color-contrast" element= {<ColorContrast/>} />
        <Route path="/lighthouse" element={<Lighthouse />} />
    </Routes>
  );
};

export default RoutingConfigs;
