import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.color === 'primary' ? 'cyan' : 'grey')};
  border: 0;
  color: #fff;
  padding: 1rem;
  min-width: 10rem;
  text-align: left;
`;
