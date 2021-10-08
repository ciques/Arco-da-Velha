import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import { Wraper, Content, History } from '../styles/sobre';


export default function Home() {


  return (
      <Wraper>
          <Header logo="./images/logo.jpg">
          
          </Header>
          <Content>            
            <img  src="./images/logo2.jpg"/>
            <History>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel metus ipsum. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur sit
             amet sem convallis finibus. Proin in fringilla neque. Donec sem libero, ornare at mauris nec, 
             aliquam sodales lorem. Nam malesuada felis et molestie luctus. Duis in massa ultricies, vulputate turpis ut,
              rhoncus urna. In in egestas arcu. Nam augue lorem, aliquam vel augue ut, aliquam ultricies ex. Etiam a sapien quam.
               Integer id porta neque, vitae cursus ipsum. Quisque ex risus, accumsan eget nulla nec, porttitor ullamcorper turpis.
                Aliquam commodo neque quis elit semper, sit amet sollicitudin nisi volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Cras nec diam sed erat ornare pellentesque. Aenean non lorem at nisi dictum molestie sagittis at tortor.

            Fusce eget tortor et eros aliquet aliquet. Praesent quis rutrum libero. Suspendisse tincidunt laoreet dui. Vivamus id interdum ex,
            et ullamcorper nulla. Sed elit sem, hendrerit a maximus quis, congue eget velit. Praesent gravida urna eu pellentesque suscipit. 
            Donec semper suscipit diam. Mauris malesuada nisi in tellus laoreet volutpat. Etiam semper mattis arcu. Ut ut hendrerit ligula.
            Vestibulum faucibus leo ac risus tincidunt, nec congue ex dapibus.
            </History>
          </Content>
      </Wraper>
  )
}

