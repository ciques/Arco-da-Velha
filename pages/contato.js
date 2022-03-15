import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Content from '../components/Content'
import { ProductButton, ButtonText } from '../styles/product';



function Contato() {
    const [logged, setLogged] = useState(false);

    return (
        <div>
            <Header setLogged={setLogged} logo="./images/logo.jpg">
            
            </Header>
            <Content>
                <div style={{textAlign: 'center'}}>
                    <ProductButton>
                        <ButtonText target="_blank" href={'https://wa.me/5551991980229'}>
                            NOS CHAME NO WHATSAPP
                        </ButtonText>
                        
                    </ProductButton>
                    
                    <div style={{margin: '10px 0'}}>
                        <a target="_blank" style={{textDecoration: 'none', color: 'black'}} href={'https://www.facebook.com/jorgerosavinilpoars'}><img width='20px' src='/images/facebook-logo.png'/> Facebook</a>
                    </div>
                    <div style={{margin: '10px 0'}}>
                        <a target="_blank" style={{textDecoration: 'none', color: 'black'}} href={'https://www.instagram.com/arco.da.velha.discos/'}><img width='20px' src='/images/instagram-logo.png'/> Instagram</a>
                    </div>
                    <p style={{margin: '10px 0'}}>
                        Telefone para contato (51) 991980229
                    </p>
                </div>
            </Content>
        </div>
    )
}

export default Contato