import { Wraper, Logo, Itens, HeaderItens } from './styles'

function Header(props){
    return (
        <Wraper>
            <Logo>
                aqui esta o logo Arco da Velha
            </Logo>
            <Itens>
                <HeaderItens>
                    Inicio
                </HeaderItens>
                <HeaderItens>
                    Sobre
                </HeaderItens>
                <HeaderItens href="/">
                    Produtos
                </HeaderItens>
                <HeaderItens href="/contato">
                    Contato
                </HeaderItens>
            </Itens>
        </Wraper>
    )
}

export default Header