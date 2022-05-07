import { Routes, Route } from "react-router-dom";
import { Fontjoy, Landing, Responsively, ColorPalette } from "routes";

const RoutingConfigs = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/fontjoy" element={<Fontjoy />} />
      <Route path="/responsively" element={<Responsively />} />
      <Route path="/colorPalette" element={<ColorPalette />} />
    </Routes>
  );
};

export default RoutingConfigs;
