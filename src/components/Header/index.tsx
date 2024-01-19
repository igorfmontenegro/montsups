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
      <Container>
        <Content>
          <InfosContainer>
            <ul>
              <a href="">
                <li>
                  <AiFillInstagram />
                </li>
              </a>
              <a href="">
                <li>
                  <FaFacebook />
                </li>
              </a>
              <a href="">
                <li>
                  <FaSquareXTwitter />
                </li>
              </a>
              <a href="">
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
              <a href="">
                <li> HOME </li>
              </a>
              <a href="">
                <li> SUPLEMENTOS </li>
              </a>
              <a href="">
                <li> SOBRE </li>
              </a>
              <a href="">
                <li> FEATURES </li>
              </a>
            </ul>
          </InfosContainer>
        </Content>
      </SubContainer>
    </>
  )
}
