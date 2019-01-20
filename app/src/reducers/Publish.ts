import { Action } from 'redux'
import { createReducer } from './lib'

export interface PublishState {
  topic?: string
  payload?: string
  emptyPayload: boolean
  retain: boolean
  editorMode: string
  qos: 0 | 1 | 2
}

export type Action = SetPayload | SetTopic | ToggleEmptyPayload | ToggleRetain | SetEditorMode | SetQoS

export enum ActionTypes {
  PUBLISH_SET_TOPIC = 'PUBLISH_SET_TOPIC',
  PUBLISH_SET_PAYLOAD = 'PUBLISH_SET_PAYLOAD',
  PUBLISH_TOGGLE_EMPTY_PAYLOAD = 'PUBLISH_TOGGLE_EMPTY_PAYLOAD',
  PUBLISH_TOGGLE_RETAIN = 'PUBLISH_TOGGLE_RETAIN',
  PUBLISH_SET_EDITOR_MODE = 'PUBLISH_SET_EDITOR_MODE',
  PUBLISH_SET_QOS = 'PUBLISH_SET_QOS',
}

export interface SetPayload {
  type: ActionTypes.PUBLISH_SET_PAYLOAD
  payload?: string
}

export interface SetTopic {
  type: ActionTypes.PUBLISH_SET_TOPIC
  topic?: string
}

export interface SetQoS {
  type: ActionTypes.PUBLISH_SET_QOS
  qos: 0 | 1 | 2
}

export interface ToggleEmptyPayload {
  type: ActionTypes.PUBLISH_TOGGLE_EMPTY_PAYLOAD
}

export interface SetEditorMode {
  type: ActionTypes.PUBLISH_SET_EDITOR_MODE
  editorMode: string
}

export interface ToggleRetain {
  type: ActionTypes.PUBLISH_TOGGLE_RETAIN
}

const initialState: PublishState = {
  editorMode: 'text',
  emptyPayload: false,
  retain: false,
  qos: 0,
}

export const publishReducer = createReducer(initialState, {
  PUBLISH_SET_TOPIC: setTopic,
  PUBLISH_SET_PAYLOAD: setPayload,
  PUBLISH_TOGGLE_EMPTY_PAYLOAD: toggleEmptyPayload,
  PUBLISH_TOGGLE_RETAIN: toggleRetain,
  PUBLISH_SET_EDITOR_MODE: setEditorMode,
  PUBLISH_SET_QOS: setQoS,
})

function setTopic(state: PublishState, action: SetTopic) {
  return {
    ...state,
    topic: action.topic,
  }
}

function setPayload(state: PublishState, action: SetPayload) {
  return {
    ...state,
    payload: action.payload,
  }
}

function setQoS(state: PublishState, action: SetQoS) {
  return {
    ...state,
    qos: action.qos,
  }
}

function setEditorMode(state: PublishState, action: SetEditorMode) {
  return {
    ...state,
    editorMode: action.editorMode,
  }
}

function toggleEmptyPayload(state: PublishState) {
  return {
    ...state,
    emptyPayload: !state.emptyPayload,
  }
}

function toggleRetain(state: PublishState) {
  return {
    ...state,
    retain: !state.retain,
  }
}
