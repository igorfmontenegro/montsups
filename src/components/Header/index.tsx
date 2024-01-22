import {
  Container,
  Content,
  InfosContainer,
  SubContainer
} from './Header.styles'

import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiBrazil } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'
import Logo from '../../assets/Logo.png'

export function Header() {
  return (
    <>
      <Container id="home">
        <Content>
          <InfosContainer>
            <ul>
              <a href="https://instagram.com">
                <li>
                  <AiFillInstagram />
                </li>
              </a>
              <a href="https://facebook.com">
                <li>
                  <FaFacebook />
                </li>
              </a>
              <a href="https://twitter.com">
                <li>
                  <FaSquareXTwitter />
                </li>
              </a>
              <a href="https://youtube.com">
                <li>
                  <FaYoutube />
                </li>
              </a>
            </ul>
          </InfosContainer>

          <InfosContainer>
            <ul>
              <li>
                <GiBrazil />
                Envio para todo o Brasil!
              </li>
              <li>
                <BsFillTelephoneFill />
                (82) 99999-0000
              </li>
              <li>
                <TbTruckDelivery />
                Entrega grátis para Maceió
              </li>
            </ul>
          </InfosContainer>
        </Content>
      </Container>

      <SubContainer>
        <Content>
          <InfosContainer>
            <img src={Logo} />
          </InfosContainer>

          <InfosContainer>
            <ul>
              <a href="#home">
                <li> HOME </li>
              </a>
              <a href="#benefits">
                <li> BENEFÍCIOS </li>
              </a>
              <a href="#about">
                <li> SOBRE </li>
              </a>
              <a href="#flavors">
                <li> SABORES </li>
              </a>
            </ul>
          </InfosContainer>
        </Content>
      </SubContainer>
    </>
  )
}
