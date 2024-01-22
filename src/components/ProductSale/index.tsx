import { Subtitle } from '../Subtitle'
import {
  Conditions,
  ConditionsContainer,
  Container,
  Content,
  VideoContainer
} from './ProductSale.styles'

import WheyAcademy from '../../assets/wheyacademy.png'
import { Button } from '../Button'

export function ProductSale() {
  return (
    <Container>
      <Content>
        <Subtitle title="Está a venda" subtitle="Whey Protein" width="200px" />

        <ConditionsContainer>
          <img src={WheyAcademy} />

          <div>
            <div>
              <h4> Você obterá </h4>
              <span> O que seu corpo realmente precisa </span>
            </div>

            <Conditions>
              <ul>
                <li>
                  <h5> Alto valor protéico </h5>
                  <p>
                    Aposte no alto valor biológico do Whey Protein Concentrado
                    para dar a energia exata para seus músculos crescerem e a
                    recuperação necessária para um treino forte e constante.
                  </p>
                </li>
                <li>
                  <h5> Baixo valor calórico </h5>
                  <p>
                    Conhecido por seu baixo valor calórico, o que o torna uma
                    opção atrativa para aqueles que buscam aumentar a ingestão
                    de proteínas sem aumentar a ingestão calórica.
                  </p>
                </li>
                <li>
                  <h5> Valor acessível </h5>
                  <p>
                    Sua popularidade e produção em larga escala permitem que
                    seja uma escolha acessível para indivíduos que buscam
                    suplementar a ingestão de proteínas sem comprometer o
                    orçamento.
                  </p>
                </li>
                <li>
                  <h5> Os melhores ingredientes </h5>
                  <p>
                    Com um processo rigoroso de seleção, utilizamos apenas
                    ingredientes da mais alta qualidade para garantir que cada
                    porção ofereça a pureza e potência necessárias.
                  </p>
                </li>
              </ul>
            </Conditions>

            <Button text="COMPRAR AGORA!" type="1" />
          </div>
        </ConditionsContainer>
      </Content>

      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YO7lokVJx_A?si=jLgzbtYA4dZymfX2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />

        <div>
          <h3> Tudo sobre WHEY PROTEIN!</h3>
          <p>
            No video ao lado temos o renomado <span>Dr Paulo Muzy</span> falando
            sobre o Whey Protein. Descubra como ele pode impulsionar seus
            treinos, promover a recuperação muscular e{' '}
            <span>contribuir para seus objetivos de saúde e fitness.</span>{' '}
            Sinta-se capacitado para tomar decisões informadas sobre sua
            nutrição com o Whey Protein Montsups. Assista agora e inicie sua
            jornada para um <span>estilo de vida mais saudável e ativo!</span>
          </p>
        </div>
      </VideoContainer>
    </Container>
  )
}
