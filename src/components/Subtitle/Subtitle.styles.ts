import styled from 'styled-components'

interface ContainerProps {
  width: string
}

export const Container = styled.div<ContainerProps>`
  text-align: center;
  margin-top: 30px;

  span {
    font-style: italic;
    color: #68c74f;
    font-weight: 600;
  }

  h4 {
    font-size: 1.4em;
    margin-bottom: 5px;
  }

  hr {
    width: ${(props) => props.width};
    margin: auto;
    border: 1px solid #68c74f;
  }
`
