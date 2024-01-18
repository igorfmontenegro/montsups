import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10px 4%;
  background-color: #68c74f;
`

export const Content = styled.div`
  max-width: 1540px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`

export const InfosContainer = styled.div`
  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    margin: 0 20px;
    color: #fff;

    svg {
      vertical-align: text-top;
      margin-right: 5px;
    }
  }

  a {
    color: #fff;
    font-size: 1.5em;
    text-decoration: none;
  }
`
