// import { Wraper, Logo, Itens, HeaderItens } from './styles'

import { Wraper } from "../Header/styles"

function Content(props){
    return (
        <Wraper>
            {props.children}
        </Wraper>
    )
}

export default Content