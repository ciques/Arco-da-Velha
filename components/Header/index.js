import { Wraper, Logo, Itens, HeaderItens, Main, Utility, SubHeader } from './styles'
import SearchBox from '../SearchBox';

function fetchData(text) {
    document.location.href = "/products/" + text;
}

function Header(props){
    return (
        <Wraper>
            <Main>
                <Logo src={props.logo}/>
                <SearchBox placeholder={'Procurar produto'} handleSearch={(text) => fetchData(text)} />
                <Utility>
                    <a href='/panel/login'>Login</a>
                </Utility>
            </Main>
            <SubHeader>
                <Itens>
                    <HeaderItens href="/">
                        Inicio
                    </HeaderItens>
                    <HeaderItens href="/">
                        Arco da Velha
                    </HeaderItens>
                    <HeaderItens href="/products">
                        Produtos
                    </HeaderItens>
                    <HeaderItens href="/contato">
                        Fale com a gente
                    </HeaderItens>
                </Itens>
            </SubHeader>
        </Wraper>
    )
}

export default Header