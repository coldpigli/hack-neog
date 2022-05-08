import { Routes, Route } from "react-router-dom";
import { Fontjoy, Landing, Lighthouse, Responsively } from "routes";

const RoutingConfigs = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/fontjoy" element={<Fontjoy />} />
      <Route path="/responsively" element={<Responsively />} />
      <Route path="/lighthouse" element={<Lighthouse />} />
    </Routes>
  );
};

export default RoutingConfigs;
