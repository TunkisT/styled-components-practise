import styled from 'styled-components';

export const ToggleEl = styled.span`
  margin: 1rem;
`;

export const Toggle = styled.span`
  cursor: pointer;
  background: green;
  padding: ${({ type }) =>
    type ? '0.6rem 2rem 0.6rem 0.5rem' : '0.6rem 0.5rem 0.6rem 2rem'};
  border-radius: 1rem;
`;

export const Bubble = styled.span`
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;
