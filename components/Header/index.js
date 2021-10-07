import { Wraper, Logo, Itens, HeaderItens, Main, Utility, SubHeader } from './styles'
import SearchBox from '../SearchBox';
import { IoIosArrowDown } from "react-icons/io";


function fetchData(text) {
    document.location.href = "/produtos/" + text;
}

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]

function Header(props){
    return (
        <Wraper>
            <Main>
                <Logo src={props.logo}/>
                <SearchBox placeholder={'Procurar produto'} handleSearch={(text) => fetchData(text)} />
                <Utility>
                    <p>Faça<a href='/panel/login'> Login</a> ou  <a href='/panel/login'> Registre-se</a></p>
                </Utility>
            </Main>
            <SubHeader>
                <Itens>                 
                    <HeaderItens href="/">
                        Destaques
                    </HeaderItens>
                    <HeaderItens href="/">
                        Arco da Velha
                    </HeaderItens>
                    <div class="dropdown">
                        <button className="dropbtn">Discos/LPs <IoIosArrowDown size={'15px'} /></button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button className="dropbtn" style={{cursor: 'pointer'}} onClick={() => document.location.href = "/produtos"}>Produtos <IoIosArrowDown size={'15px'} /></button>
                        <div class="dropdown-content">
                            <a href="/produtos">Todos</a>
                            <a href="/produtos/CD">CD</a>
                            <a href="/produtos/K7">K7</a>
                            <a href="/produtos/Livros">Livros</a>
                        </div>
                    </div>  
                    <HeaderItens href="/contato">
                        Fale com a gente
                    </HeaderItens>
                </Itens>
            </SubHeader>
        </Wraper>
    )
}

export default Header