import { Container } from './BoxFlavor.styles'

interface BoxFlavorProps {
  flavor: string
}

export function BoxFlavor(props: BoxFlavorProps) {
  return (
    <Container>
      <h4> {props.flavor} </h4>
    </Container>
  )
}
