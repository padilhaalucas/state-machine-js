import * as actionTypes from './actionTypes'

const startApp = (data) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.START_APP,
      data
    })
  }
}

export {
  startApp
}