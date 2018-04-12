const friendlyError = (error) => {
    return error;
}

export const getCreator = (URL, {
    LOADING, SUCCESS, FAILURE
}) => {
    return (BASE_URL) => () => (dispatch) => {
        dispatch({
            type: LOADING
        });

        fetch(BASE_URL + URL)
            .then(data => {
                return data.json();
            })
            .then(data => {
                dispatch({
                    type: SUCCESS,
                    data
                });
            })
            .catch(error => {
                dispatch({
                    type: FAILURE,
                    data: friendlyError(error)
                })
            });
    }
}