
export const SAVE_STEP = Symbol('SAVE_STEP')
export function saveStepsData ({ lang }) {
  return dispatch => {
    dispatch({
      type: SAVE_STEP
    })
  }
}

