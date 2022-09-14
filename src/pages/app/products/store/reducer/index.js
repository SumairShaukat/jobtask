import { GET_PRODUCT } from "../action";

const init = {
  products: [],
  loading: false,
  query: {
    skip: 1,
    take: 20,
  },
  count: 0,
};
const product = (state = init, action) => {
  switch (action?.type) {
    case GET_PRODUCT: {
      return {
        ...state,
        ...action?.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default product;
