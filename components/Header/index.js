import { Wraper, Logo, Itens, HeaderItens, Main, Utility, SubHeader } from './styles'
import SearchBox from '../SearchBox';

function fetchData() {
    console.log('works')
}

function Header(props){
    return (
        <Wraper>
            <Main>
                <Logo src="./images/logo.jpg"/>
                <SearchBox placeholder={'Pesquise por produtos aqui...'} handleSearch={(text) => fetchData(text)} />
                <Utility>
                    to be defined
                </Utility>
            </Main>
            <SubHeader>
                <Itens>
                    <HeaderItens href="/">
                        Inicio
                    </HeaderItens>
                    <HeaderItens href="/">
                        Sobre
                    </HeaderItens>
                    <HeaderItens href="/products">
                        Produtos
                    </HeaderItens>
                    <HeaderItens href="/contato">
                        Contato
                    </HeaderItens>
                </Itens>
            </SubHeader>
        </Wraper>
    )
}

export default Header