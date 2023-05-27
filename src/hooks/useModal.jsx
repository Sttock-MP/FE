import useModals from './useModals'

export default function useModal(type) {
  const { getModalStatus, openModal, closeModal } = useModals()
  const isOpened = getModalStatus(type)

  return {
    isOpened,
    open(Component, props) {
      openModal(type, Component, props)
    },
    close: () => closeModal(type),
  }
}
