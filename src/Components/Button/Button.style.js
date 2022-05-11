import styled from 'styled-components';
export const ButtonEl = styled.button`
  background: ${({ color }) => (color ? color : 'white')};
  color: whitesmoke;
  border: none;
  font-size: 1.5rem;
  padding: 1.5rem 5rem 1.5rem 1rem;
`;
