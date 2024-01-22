import styled from 'styled-components'

export const Container = styled.div`
  background-color: #68c74f;
`

export const Content = styled.div`
  max-width: 1540px;
  height: 5vh;
  padding: 10px 4%;
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

export const SubContainer = styled.div`
  background-color: #fafafa;

  ${Content} {
    max-width: 1420px;
    height: 10vh;
  }

  img {
    width: 150px;
  }

  li {
    color: #000;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
      color: #68c74f;
      transition: 0.3s;
    }
  }
`
