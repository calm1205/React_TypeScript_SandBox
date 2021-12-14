import styled from 'styled-components';
export const RadioStyle = styled.div`
  & {
    width: 15px;
    height: 15px;
    border: 1px solid black;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;

    .active {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background-color: ${({ theme }) => theme.color.main};
    }
  }
`;
