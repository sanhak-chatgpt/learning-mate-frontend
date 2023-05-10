const initialState = {
    activeIcon: 0,
};
  
const reducer = (state = initialState, action: any) => {
switch (action.type) {
    case 'SET_ACTIVE_ICON':
    return {
        ...state,
        activeIcon: state.activeIcon,
    };
    default:
    return state;
    }
};
  
export default reducer;
  