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
            let newWatchlist = [...state.watchlist]
            const index = state.watchlist.findIndex((watchlistItem) => watchlistItem.id === action.id)
            if (index >= 0) {
                //item exists in the watchlist, remove it
                newWatchlist.splice(index, 1)
            } else {
                console.warn(
                    'Item does not exist in the watchlist!'
                )
            }
            return { ...state, watchlist: newWatchlist }
            break;

        default:
            return state;
    }
}

export default reducer;