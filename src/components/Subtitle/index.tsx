import { Container } from './Subtitle.styles'

interface SubtitleProps {
  title: string
  subtitle: string
  width: string
}

export function Subtitle(props: SubtitleProps) {
  return (
    <Container width={props.width}>
      <span> {props.title} </span>
      <h4> {props.subtitle} </h4>

      <hr />
    </Container>
  )
}
