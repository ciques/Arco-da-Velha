import { Wraper, Logo, Itens, HeaderItens, Main, Utility, SubHeader } from './styles'

function fetchData() {
    console.log('works')
}

function logOut(){
    localStorage.removeItem('userToken')
    document.location.href = "/panel/login";
  }

function Header({setMenu}){
    return (
        <Wraper>
            <Main>
                <Logo src="../images/logo.jpg"/>
                <Utility>
                    Bem Vindo ao Painel de Administração {localStorage.getItem('userName')}
                    
                </Utility>
                <button onClick={() => logOut()}>Sair</button>
            </Main>
            <SubHeader>
                <Itens>
                    <HeaderItens href="/panel/admin">
                        Inicio
                    </HeaderItens>
                    <HeaderItens onClick = {() => setMenu('cadastrar')}>
                        Cadastrar Produtos
                    </HeaderItens>
                    <HeaderItens onClick = {() => setMenu('remover')}>
                        Baixa/Remover Produtos
                    </HeaderItens>
                </Itens>
            </SubHeader>
        </Wraper>
    )
}

export default Header