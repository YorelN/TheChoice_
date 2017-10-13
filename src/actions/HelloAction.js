export const HelloWorld = (Text) => {
    return (dispatch) => {
        dispatch({
            type : `GREETING`,
            payload : Text
        })
    }
};