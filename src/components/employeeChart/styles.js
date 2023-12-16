import styled from 'styled-components';

export const ListWrapper = styled.li`
  & li {
    float: left;
    text-align: center;
    list-style-type: none;
  }

  & li::before,
  & li::after {
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 1px solid #ccc;
    width: 50%;
    height: 20px;
  }
  & li::after {
    right: auto;
    left: 50%;
    border-left: 1px solid #ccc;
  }

  & li:only-child::after,
  & li:only-child::before {
    display: none;
  }
`;
