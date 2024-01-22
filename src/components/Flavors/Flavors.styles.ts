import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
`

export const Content = styled.div`
  position: relative;
  height: 60vh;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 80px;

  img {
    width: 550px;
  }
`

export const ContainerFlavorsLeft = styled.div`
  position: absolute;
  left: 200px;
  top: 100px;
`

export const ContainerFlavorsRight = styled.div`
  position: absolute;
  right: 200px;
  top: 100px;
`
