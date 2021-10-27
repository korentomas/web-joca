import { CarouselCrossfade } from "./carousel";

import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <CarouselCrossfade />
        <div className="quienes-somos">
          <h6>SOBRE NOSOTROS</h6>
          <h1>¿QUIÉNES SOMOS?</h1>
          <p>
            Jóvenes por el Clima es un movimiento social y político encabezado
            por la juventud del país que lucha por revertir los efectos de la
            crisis climática. Tenemos como misión introducir la cuestión
            climática en la agenda pública de manera permanente, e instalar la
            problemática como un eje central de las políticas públicas tomadas
            por los gobiernos. Somos la generación que más va a sufrir las
            consecuencias del abuso ambiental por parte de las grandes
            corporaciones contaminantes, y somos la última que puede hacer algo.
          </p>
          <p>
            Sabiendo que el 71% de las emisiones en el mundo las producen tan
            solo 100 empresas, entendemos que los culpables de nuestra alarmante
            realidad son aquellxs tomadorxs de decisiones que conscientemente se
            llenan los bolsillos de dinero contaminado y ensangrentado a costa
            de las clases populares. Si bien tenemos 11 años para producir un
            cambio y evitar llegar a un punto de no retorno, entendemos que la
            lucha es urgente: hoy mismo hay poblaciones enteras siendo azotadas
            por sequías, inundaciones, e incontables enfermedades causadas por
            los químicos utilizados para la megaminería y la ganadería; y
            pueblos originarios teniendo que pararse frente a inmensas topadoras
            porque son obligados a migrar de sus tierras ancestrales para talar
            sus árboles.
          </p>
          <h5>
            Es hora de decirle basta a las corporaciones contamiantes y a los
            Estados complices.
          </h5>
        </div>
      </>
    );
  }
}

export { Home };
