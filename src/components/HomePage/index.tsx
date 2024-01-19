import { Container, Content, Range } from './HomePage.styles'

import Wheys from '../../assets/wheyp.png'
import WheyUnd from '../../assets/wheyund.png'
import { Button } from '../Button'

export function HomePage() {
  return (
    <Container>
      <Content>
        <div>
          <h1>
            Seu caminho para uma <span> vida mais saudável </span>
          </h1>
          <br />
          <p>
            Transforme sua rotina diária com saúde e vitalidade. Suplementos de
            alta qualidade para impulsionar sua jornada de bem-estar. Escolha
            Montsups, escolha viver melhor.
          </p>{' '}
          <br />
          <Button type="1" text="DETALHES DO PRODUTO" />
        </div>

        <div>
          <img src={Wheys} />
        </div>
      </Content>

      <Range>
        <div>
          <img src={WheyUnd} />
        </div>

        <div>
          <h4> Produto aprovado pela ANVISA </h4>
          <span> Suplemento com uma fórmula poderosa e saudável! </span>
        </div>

        <div>
          <Button type="2" text="VER PRODUTO" />
        </div>
      </Range>
    </Container>
  )
}
