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

export const Privileges = styled.div`
  height: 36vh;
  display: flex;
  flex-direction: column;
`

export const Subtitle = styled.div`
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
    width: 400px;
    margin: auto;
    border: 1px solid #68c74f;
  }
`

export const BenefitsContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  gap: 100px;
  text-align: center;

  img {
    width: 50px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 20px;
    max-width: 340px;
  }
`
