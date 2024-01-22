import { Subtitle } from '../Subtitle'
import {
  Container,
  ContainerFlavorsLeft,
  ContainerFlavorsRight,
  Content
} from './Flavors.styles'

import WheyFlavor from '../../assets/wheysflavors.png'
import { BoxFlavor } from '../BoxFlavor'

export function Flavors() {
  return (
    <Container>
      <Content>
        <Subtitle
          title="Diversos sabores"
          subtitle="Para todos os gostos"
          width="300px"
        />

        <img src={WheyFlavor} />

        <ContainerFlavorsLeft>
          <BoxFlavor flavor="Chocolate" />
          <BoxFlavor flavor="Morango" />
          <BoxFlavor flavor="Baunilha" />
          <BoxFlavor flavor="Beijinho" />
          <BoxFlavor flavor="Brigadeiro" />
        </ContainerFlavorsLeft>

        <ContainerFlavorsRight>
          <BoxFlavor flavor="Caramelo" />
          <BoxFlavor flavor="Cappuccino" />
          <BoxFlavor flavor="Doce de Leite" />
          <BoxFlavor flavor="Maracujá" />
          <BoxFlavor flavor="Torta de limão" />
        </ContainerFlavorsRight>
      </Content>
    </Container>
  )
}
