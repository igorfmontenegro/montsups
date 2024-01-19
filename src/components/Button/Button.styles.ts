import styled from 'styled-components'

interface ContainerProps {
  type: string
}

export const Container = styled.button<ContainerProps>`
  border: none;
  padding: 10px;
  background-color: ${(props) => (props.type === '1' ? '#68c74f' : '#fff')};
  color: ${(props) => (props.type === '1' ? '#ffff' : '#68c74f')};
  cursor: pointer;
  font-weight: 600;
`
