// import { Wraper, Logo, Itens, HeaderItens } from './styles'

import { Title, Wraper  } from "./styles"

function Content(props){
  return (
      <Wraper>
        {props.title &&         
          <Title>{props.title}</Title>     
        }
        {props.children}
      </Wraper>
  )
}

export default Content