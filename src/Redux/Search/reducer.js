import { FAILURE, LOADING, SUCCESS, USER_SEARCH , SINGLE_USER} from "../../Redux/Search/actionType"
const initState = {
  loading: false,
  failure: false,
  succcess: false,
  data: [],
  single : {}
}
export const reducer = (store = initState, { type, payload }) => {
console.log('payload', payload);

  switch (type) {
    case USER_SEARCH:
      return { ...store, data: payload }
    case SINGLE_USER:
      return { ...store, single: payload }
    case LOADING:
      return { ...store, loading: true }
    case SUCCESS:
      return { ...store, loading: false, succcess: true }
    case FAILURE:
      return { ...store, loading: false, success: false, failure: true }
    default:
      return store
  }
}