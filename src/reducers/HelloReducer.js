export default function(state = {}, action = {})
{
    switch (action.type) {
        case `GREETING` :
            return Object.assign({}, action.payload.data);
        default :
            return state
    }
}
