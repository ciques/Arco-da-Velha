import { Wraper, Logo, Itens, HeaderItens, Main, Utility, SubHeader } from './styles'

function fetchData() {
    console.log('works')
}

function logOut(){
    localStorage.removeItem('userToken')
    localStorage.removeItem('userName')
    localStorage.removeItem('admin')
    document.location.href = "/panel/login";
  }

function Header({setMenu, setFilterPost}){
    var userName

    if (process.browser) {
        userName = localStorage.getItem('userName');
    }


    return (
        <Wraper>
            <Main>
                <Logo onClick={()=> document.location.href = "/"} src="../images/logo.jpg"/>
                <Utility>
                    Bem Vindo ao Painel de Administração {userName}                    
                </Utility>
                <button onClick={() => logOut()}>Sair</button>
            </Main>
            <SubHeader>
                <Itens>
                    {/* <HeaderItens href="/panel/admin">
                        Inicio
                    </HeaderItens> */}
                    <HeaderItens onClick = {() => setMenu('cadastrar')}>
                        Cadastrar Produtos
                    </HeaderItens>
                    <HeaderItens style={{ borderRight: 'none', borderLeft: 'none'}} onClick = {() => {setMenu('remover'); setFilterPost('')}}>
                        Editar / Remover Produtos
                    </HeaderItens>
                    <HeaderItens onClick = {() => document.location.href = "/"}>
                        Voltar para o site
                    </HeaderItens>
                </Itens>
            </SubHeader>
        </Wraper>
    )
}

export default Header