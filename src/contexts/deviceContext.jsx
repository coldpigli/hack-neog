import { createContext, useContext, useReducer } from "react";
import { deviceMetaData } from "constants";

const DeviceContext = createContext(null);

const useDevice = () => useContext(DeviceContext);

const deviceReducer = (state, action) => {
    switch (action.type) {
        case "ROTATE_DEVICE":
            return state.map((device)=>{
                return (device.id===action.payload)?{...device, landscape: !device.landscape}:device
            })    
        default:
            return state;
    }
}

const DeviceProvider = ({children}) => {

    const [deviceState, dispatchDevice] = useReducer(deviceReducer, deviceMetaData )
    console.log(deviceMetaData)

    return <DeviceContext.Provider value={{deviceState, dispatchDevice}}>
        {children}
    </DeviceContext.Provider>
}

export {
    useDevice,
    DeviceProvider
}

