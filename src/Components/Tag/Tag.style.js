import styled from 'styled-components';

export const TagEl = styled.span`
  background: ${({ color }) => (color ? color : 'white')};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;
