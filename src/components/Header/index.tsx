import { Container, Content, InfosContainer } from './Header.styles'

import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GiBrazil } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'

export function Header() {
  return (
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

      <Content>
        <InfosContainer></InfosContainer>
      </Content>
    </Container>
  )
}
