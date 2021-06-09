import * as actionTypes from './actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {}

const startAppReducer = createReducer(initialState, {
  [actionTypes.START_APP]: (state, data) => {
    state.started = true
  },
})

export default function reducer(state = initialState, action={}) {
  return {
    startAppService: startAppReducer(state.startAppService, action),
  }
}