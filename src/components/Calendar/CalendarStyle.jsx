import styled from 'styled-components'

const StyledContainer = styled.div``

const StyledHeader = styled.div`
  display: flex;
  width: 25%;
  margin-top: 30px;
  .thisMonth {
    font-weight: 700;
    color: #292929;
    line-height: 24px;
  }
  button {
    width: 24px;
    margin: 0 8px;
  }
`

const StyledBody = styled.div`
  flex-direction: column;
  margin-top: 20px;

  text-align: center;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 500px;
    height: 90px;
  }
  .row.week {
    border-bottom: 1px solid #e8e8e8;
  }
  .box {
    font-size: 14px;
  }
  .text {
    position: static;
    width: 32px;
    height: 32px;
    color: #665a48;
    font-weight: 600;
  }
  .holiday,
  .grayed {
    color: #292929;
    pointer-events: none;
  }
  .day {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }
  .selected {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #9f8772;
    color: #fff;
  }
  .today {
    border-radius: 50%;
    font-weight: 500;
    font-color: #fff;
    background: #c8dbbe;
  }
  .isSelected {
    position: relative;
    color: pink;
    font-size: 10px;
    font-weight: 400;
  }
  .isToday {
    position: relative;
    color: #292929;
    font-size: 10px;
    font-weight: 400;
  }
  .none {
    color: #e2ded8;
  }
`

const StyledFeed = styled.div`
  margin-top: 20px;
  width: 90%;
  height: 25%;
  position: relative;
  top: 0;
  left: 60px;
  text-align: left;
  font-size: 12px;
  color: #665a48;

  padding: 10px;
  span {
  }
  h2 {
    font-size: 14px;
  }
`
const StyledWrapper = styled.div`
  display: flex;
`

export { StyledHeader, StyledBody, StyledFeed, StyledWrapper, StyledContainer }
