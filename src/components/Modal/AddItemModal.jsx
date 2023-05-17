function AddItemModal({ setModalOpen }) {
  // 상품 추가 모달창

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="w-[931px] h-[600px] z-[999] absolute top-[166px] left-[218px] bg-gray-200 ">
      <button className="bg-blue-600" onClick={closeModal}>
        X
      </button>
      <p>임시 모달창 디자인</p>
    </div>
  )
}
export default AddItemModal
