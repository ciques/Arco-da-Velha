import { Wraper, Logo, Itens, HeaderItens, Main, Utility, SubHeader } from './styles'
import SearchBox from '../SearchBox';
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from 'react';
import api from '../../services/api'


function fetchData(text) {
    document.location.href = "/produtos/" + text;
}

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
]




function Header(props) {

    const [logged, setLogged] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [admin, setAdmin] = useState(false);

    var userName

    if (process.browser) {
        userName = localStorage.getItem('userName');
    }

    async function checkLogin() {
        const token = localStorage.getItem('userToken');

        if (!token) {
            props.setLogged(false)
            setLogged(false);
            return;
        }

        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const response = await api.post("refresh", {}, config)

            // refresh responde dizendo se o usuario é admin caso o token seja válido
            setAdmin(response.data[1]);
            if (response.status == 200) {
                props.setLogged(true)
                setLogged(true);
            }
            console.log(response)


        } catch (error) {
            console.log(error)
            props.setLogged(false)
            setLogged(false);
            return
        }

        setFetched(true)
    }

    function logout(){
        localStorage.removeItem('userToken')
        localStorage.removeItem('userName')
        localStorage.removeItem('admin')
        checkLogin()
    }

    useEffect(() => {
        !fetched && checkLogin();
    }, [fetched]);

    return (
        <Wraper>
            <Main>
                <Logo src={props.logo} />
                <SearchBox placeholder={'Procurar produtos, artistas e muito mais'} handleSearch={(text) => fetchData(text)} />
                <Utility>
                    {logged ? 
                    <>
                        <p>Bem Vindo {userName}</p>
                        {admin && <p style={{cursor: 'pointer', marginTop: '10px', color: '#e39a09'}} onClick={() => document.location.href = '/panel/admin'} >Entrar no Painel de Administração</p>}
                        <p style={{cursor: 'pointer', marginTop: '10px', color: '#e39a09'}} onClick={() => logout() }>Sair</p>

                    </>
                    : 
                        <p>Faça<a href='/panel/login'> Login</a> ou  <a href='/panel/cadastro'> Registre-se</a></p>
                    }
                    
                </Utility>
            </Main>
            <SubHeader>
                <Itens>
                    <HeaderItens href="/">
                        Destaques
                    </HeaderItens>
                    <div className="dropdown">
                        <button className="dropbtn" style={{ cursor: 'pointer' }}>Produtos <IoIosArrowDown size={'15px'} /></button>
                        <div  className="dropdown-content">
                            <a href="/produtos">Todos</a>
                            <div style={{display: 'flex'}}> 
                                <div> 
                                    <a style={{height: '33%'}} href="/produtos/CD">CD</a>
                                    <a style={{height: '33%'}} href="/produtos/K7">K7</a>
                                    <a style={{height: '33%'}} href="/produtos/Vinil">Vinil</a>                                    
                                </div>
                                <div>
                                    <a style={{height: '33%'}} href="/produtos/vhs">VHS</a>
                                    <a style={{height: '33%'}} href="/produtos/dvd">DVD</a>   
                                    <a style={{height: '33%'}} href="/produtos/Livros">Livros</a>                                
                                </div>
                                <div>                                    
                                    <a style={{height: '50%'}} href="/produtos/compactos">Vinil Compactos</a>
                                    <a style={{height: '50%'}} href="/produtos/toca disco">Toca Discos</a>  
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="dropbtn">Discos/LPs <IoIosArrowDown size={'15px'} /></button>
                        <div className="discos dropdown-content">
                            <div style={{display: 'flex'}}>
                                <div>
                                    <a href="/produtos/Pop Rock">Pop Rock</a>
                                    <a href="/produtos/Rock Internacional">Rock Internacional</a>
                                    <a href="/produtos/samba">Samba</a>
                                    <a href="/produtos/Novelas">Novelas</a>
                                </div>
                                <div>
                                    <a href="/produtos/Orquestras">Orquestras</a>
                                    <a href="/produtos/Classica">Classica</a>
                                    <a href="/produtos/Jazz">Jazz</a>
                                    <a href="/produtos/Filmes">Filmes</a>
                                </div>
                                <div>
                                    <a href="/produtos/Discoteque">Discoteque</a>
                                    <a href="/produtos/Hits">Hits</a>
                                    <a href="/produtos/Rock Nacional">Rock Nacional</a>
                                    <a href="/produtos/Funk">Funk</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HeaderItens removable href="/sobre">
                        Arco da Velha
                    </HeaderItens>
                    <HeaderItens removable href="/contato">
                        Fale com a gente
                    </HeaderItens>
                </Itens>
            </SubHeader>
        </Wraper>
    )
}

export default Header