import { useModalsDispatch, useModalsState } from '../contexts/modal'

export default function useModals() {
  const openedModals = useModalsState()
  const { open, close } = useModalsDispatch()

  const openModal = (type, Component, props) => {
    open(type, Component, props)
  }
  const closeModal = (type) => {
    close(type)
  }
  const getModalStatus = (type) => {
    return !!openedModals.get(type)
  }
  return { openModal, closeModal, getModalStatus }
}
