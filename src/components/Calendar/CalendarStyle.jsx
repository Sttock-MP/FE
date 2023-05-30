import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;

  margin: 20px;
  margin-top: 30px;
  .thisMonth {
    margin: 0 10px;
    padding: 0 1px;
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
  text-align: center;
  margin-top: 40px;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    width: 500px;
    height: 80px;
  }
  .row.week {
    height: 18px;
    width: 500px;
    border-bottom: 1px solid #e8e8e8;
  }
  .box {
    width: 40px;
    height: 40px;
    margin: 6px 6px;
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

export { StyledHeader, StyledBody }
