import {
  BenefitsContainer,
  Container,
  Content,
  Privileges,
  Range
} from './HomePage.styles'

import Wheys from '../../assets/wheyp.png'
import WheyUnd from '../../assets/wheyund.png'
import Energy from '../../assets/energy.png'
import Muscle from '../../assets/muscle.png'
import Body from '../../assets/body.png'
import Resistance from '../../assets/resistance.png'

import { Button } from '../Button'
import { Subtitle } from '../Subtitle'

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
          </p>
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

      <Privileges id="benefits">
        <Subtitle
          title="Benefícios incríveis"
          subtitle="Em um Único Suplemento"
          width="400px"
        />
        <BenefitsContainer>
          <div>
            <span>
              <img src={Energy} />
              <h4> Aumento de Energia </h4>
            </span>
            <p>
              Proporciona impulsos energéticos, melhorando o desempenho durante
              os exercícios, permitindo treinos mais intensos e eficazes.
            </p>
          </div>
          <div>
            <span>
              <img src={Muscle} />
              <h4> Recuperação Muscular </h4>
            </span>
            <p>
              Com ingredientes específicos, é acelerada a recuperação muscular,
              reduzindo a fadiga pós-exercício e promovendo uma recuperação mais
              rápida.
            </p>
          </div>
          <div>
            <span>
              <img src={Body} />
              <h4> Ganho de Massa </h4>
            </span>
            <p>
              Ao fornecer nutrientes essenciais, contribue para o crescimento e
              desenvolvimento muscular, auxiliando na obtenção de resultados
              mais visíveis.
            </p>
          </div>
          <div>
            <span>
              <img src={Resistance} />
              <h4> Melhoria na Resistência </h4>
            </span>
            <p>
              Com ingredientes como aminoácidos e antioxidantes, prolonga a
              capacidade de realizar exercícios e melhora a resistência geral.
            </p>
          </div>
        </BenefitsContainer>
      </Privileges>
    </Container>
  )
}
