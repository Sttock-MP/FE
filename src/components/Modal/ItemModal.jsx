import ReactModal from 'react-modal'

const ItemModal = ({ isOpen, onSubmit, onCancel }) => {
  const handleSubmit = () => {
    onSubmit()
  }
  const handleCancel = () => {
    onCancel()
  }

  return (
    <ReactModal isOpen={isOpen}>
      모달
      <div>
        <button onClick={handleSubmit}>확인</button>
        <button onClick={handleCancel}>취소</button>
      </div>
    </ReactModal>
  )
}
export default ItemModal
