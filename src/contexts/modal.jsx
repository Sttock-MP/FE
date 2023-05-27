import { createContext, useContext, useState } from 'react'

const ModalsStateContext = createContext(new Map())

const ModalsDispatchContext = createContext(undefined)

export const ModalsProvider = ({ children }) => {
  const [opendedModals, setOpendedModals] = useState(new Map())
  const open = (type, Component, props) => {
    setOpendedModals((modals) => new Map([...modals, [type, { Component, props }]]))
  }
  const close = (type) => {
    setOpendedModals((modals) => {
      const newMap = new Map(modals)
      newMap.delete(type)
      return newMap
    })
  }

  const dispatch = { open, close }
  return (
    <ModalsDispatchContext.Provider value={dispatch}>
      <ModalsStateContext.Provider value={opendedModals}>{children}</ModalsStateContext.Provider>
    </ModalsDispatchContext.Provider>
  )
}

export function useModalsState() {
  const state = useContext(ModalsStateContext)
  if (!state) throw new Error('useModalsState not found')
  return state
}

export function useModalsDispatch() {
  const dispatch = useContext(ModalsDispatchContext)
  if (!dispatch) throw new Error('useModalsDispatch not found')
  return dispatch
}
