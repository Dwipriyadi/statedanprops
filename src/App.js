import React from 'react';
import Kursus from './state/State';
import Materi from './props/Props';
import './props/style.css';

    function App(){
        return(
          <div className="wraperapp">
            <Kursus/>
            <hr/>
              <Materi img={require('./props/belajarseo.jpg')} des="belajar seo" harga="120000"/>
              <Materi img={require('./props/serviceseo.png')} des="belajar google adword" harga="400000"/>
              <Materi img={require('./props/imagesreact.jpg')} des="belajar React js" harga="50000"/>
          </div>
        );
      } 
    export default App;