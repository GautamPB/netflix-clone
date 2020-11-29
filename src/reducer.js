//data layer is stored here
export const initialState = {
    watchlist: [], //storage element(initial state of the watchlist)
};

function reducer(state, action) //data layer aka state and action aka operations on the data layer
{
    switch (action.type) //action.type is different types of actions on the state(data layer)
    {
        case 'ADD_TO_LIST':
            //logic to add to list
            break;

        case 'REMOVE_FROM_LIST':
            //logic to remove from list
            break;

        default:
            return state;
    }
}

export default reducer;