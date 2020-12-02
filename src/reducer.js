//data layer is stored here
export const initialState = {
    watchlist: [], //storage element(initial state of the watchlist)
};

function reducer(state, action) //data layer aka state and action aka operations on the data layer
{
    console.log(action)
    switch (action.type) //action.type is different types of actions on the state(data layer)
    {
        case 'ADD_TO_LIST':
            //logic for adding to list
            //for every dispatch, we need to return a new data layer.
            return {
                ...state,
                watchlist: [...state.watchlist, action.item] //old state of watchlist + new item which is generated when clicked
            };
            break;

        case 'REMOVE_FROM_LIST':
            //logic for removing from list
            return { state }
            break;

        default:
            return state;
    }
}

export default reducer;