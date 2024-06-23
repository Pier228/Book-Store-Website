const initialState = {
    orderPopup: false
};

const orderPopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_ORDER_POPUP':
            return {
                ...state,
                orderPopup: !state.orderPopup
            };
        default:
            return state;
    }
};

export default orderPopupReducer;