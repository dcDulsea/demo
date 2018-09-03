import { INITIAL} from "../acitons";

const reducer = (state, action) => {
  console.log(action)
  switch (action.type){
    case 'SHOW_PAGING':
      return action.data;
    case 'SHOW_UNIT':
      return action.data;
    case 'SHOW_SORT':
      return action.data;
    default :
      return INITIAL
  }
}

export default reducer;