import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Content from '../components/Content'

function Contato() {
    const [logged, setLogged] = useState(false);

    return (
        <div>
            <Header setLogged={setLogged} logo="./images/logo.jpg">
            
            </Header>
            <Content>
                <div style={{textAlign: 'center'}}>
                    Telefone para contato (51)91980229
                </div>
            </Content>
        </div>
    )
}

export default Contato