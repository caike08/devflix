import React from 'react';
import Menu from './components/menu';
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer';

import data from './data/dados_iniciais.json';

const mainDesc = '"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"'

function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo} 
        url={data.categorias[0].videos[0].url}
        videoDescription={mainDesc}
      />

      <Carousel
        ignoreFirstVideo
        category={data.categorias[0]}
      />

      <Carousel
        category={data.categorias[1]}
      />

      <Carousel
        category={data.categorias[2]}
      />      

      <Carousel
        category={data.categorias[3]}
      />      

      <Carousel
        category={data.categorias[4]}
      />      

      <Carousel
        category={data.categorias[5]}
      />   

      <Footer />
    </div>
  );
}

export default App;
