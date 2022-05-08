import {
  GET_RED_COLOR_FOR_TEXT,
  GET_GREEN_COLOR_FOR_TEXT,
  GET_BLUE_COLOR_FOR_TEXT,
  GET_TEXT_COLOR,
  GET_RED_COLOR_FOR_BACKGROUND,
  GET_GREEN_COLOR_FOR_BACKGROUND,
  GET_BLUE_COLOR_FOR_BACKGROUND,
  GET_BACKGROUND_COLOR,
} from "./colorContrastconstants";

export const ColorContrastReducer = (state, action) => {
  switch (action.type) {
    case GET_RED_COLOR_FOR_TEXT:
      return {
        ...state,
        redText: action.payload,
      };
    case GET_GREEN_COLOR_FOR_TEXT:
      return {
        ...state,
        greenText: action.payload,
      };

    case GET_BLUE_COLOR_FOR_TEXT:
      return {
        ...state,
        blueText: action.payload,
      };

    case GET_TEXT_COLOR:
      return {
        ...state,
        textColor: action.payload,
      };

    case GET_RED_COLOR_FOR_BACKGROUND:
      return {
        ...state,
        redBackground: action.payload,
      };

    case GET_GREEN_COLOR_FOR_BACKGROUND:
      return {
        ...state,
        greenBackground: action.payload,
      };

    case GET_BLUE_COLOR_FOR_BACKGROUND:
      return {
        ...state,
        blueBackground: action.payload,
      };

    case GET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.payload,
      };
  }
};
