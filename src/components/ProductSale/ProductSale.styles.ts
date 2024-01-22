import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
`

export const Content = styled.div`
  height: 60vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
`

export const ConditionsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 50px;
  margin: auto;

  img {
    height: 350px;
  }

  h4 {
    color: #68c74f;
    font-style: italic;
  }

  span {
    font-weight: 700;
  }

  button {
    position: absolute;
    right: 0;
    margin-top: 10px;
  }
`

export const Conditions = styled.div`
  max-width: 800px;

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    margin: 20px;
    text-align: justify;

    border-left: 3px solid #68c74f;
    padding-left: 20px;
  }

  h5 {
    font-size: 0.9em;
  }

  p {
    margin-top: 10px;
    max-width: 300px;
    font-size: 0.9em;
  }
`

export const VideoContainer = styled.div`
  height: 40vh;
  background-color: #68c74f;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    width: 600px;
    color: #fff;

    h3 {
      font-size: 2em;
      margin-bottom: 40px;
      border-bottom: 3px solid #fff;
    }

    p {
      text-align: justify;
    }

    span {
      font-weight: 700;
    }
  }
`
