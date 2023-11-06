import { MAKE_ORDER } from "./ActionTypes";

const intialstate = {
  noOfProduct: 100,
};

const productReducer = (state = intialstate, action) => {
  switch (action.type) {
    case MAKE_ORDER:
      return {
        ...state,
        noOfProduct: state.noOfProduct - 1,
      };
    default:
      return state
  }
};
export default productReducer;
