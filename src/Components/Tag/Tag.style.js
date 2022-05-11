import styled from 'styled-components';

export const Tag = styled.span`
  background: ${(props) => props.background};
  border-radius: 1rem;
  color: ${(props) => props.color};
  padding: 0.2rem 0.5rem;
  &:hover {
    background: ${(props) => props.hoverColor};
  }
`;
