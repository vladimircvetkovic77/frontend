import * as actions from '../api'
import http from '../../services/httpService'

const api = ({ dispatch }) => next => async action => {

  if (action.type !== actions.apiCallBegan.type) return next(action);

  next(action);

  const { baseURL, url, onSuccess, onStart, onError, onEnd, method, data } = action.payload;

  if (onStart) dispatch({ type: onStart });

  try {
    const response = await http.request({
      baseURL,
      url,
      method,
      data
    });

    dispatch(actions.apiCallSuccess(response.data))

    if (onSuccess && response.data) {
      dispatch({ type: onSuccess, payload: response.data });
    } else {
      dispatch({ type: onSuccess, payload: response });
    }

  } catch (err) {
    dispatch(actions.apiCallFailed(err.response));
    if (onError) dispatch({ type: onError,  payload: err.response});
  }

  if (onEnd) setTimeout(() => dispatch({ type: onEnd }), 500)

}

export default api;
