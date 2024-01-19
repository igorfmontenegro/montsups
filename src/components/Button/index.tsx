import { Container } from './Button.styles'

interface ButtonProps {
  text: string
  type: string
}

export function Button(props: ButtonProps) {
  return <Container type={props.type}> {props.text} </Container>
}
