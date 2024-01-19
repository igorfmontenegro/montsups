import styled from 'styled-components'

export const Container = styled.section`
  height: 85vh;
  width: 100%;
`

export const Content = styled.div`
  height: 40vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span {
    color: #68c74f;
  }

  p {
    max-width: 600px;
  }

  img {
    height: 380px;
  }
`

export const Range = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 11vh;
  background-color: #68c74f;
  color: #fff;

  h4 {
    font-style: italic;
    font-weight: 400;
  }

  span {
    font-size: 1.5em;
    font-weight: 500;
    letter-spacing: 1.5px;
  }

  img {
    height: 230px;
    margin-bottom: 25px;
  }
`
