import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../pure/componenteA';


const ComponenteB = () => {

    const contactDefault = new Contacto("Rocio", "Julio", "rocioju@", true);


    return (
        <div>
            <h2>nombre: {contactDefault.nombre}</h2>
            <h2>apellido: {contactDefault.apellido}</h2>
            <h2>email: {contactDefault.email}</h2>
            <h2>Está conectado: {contactDefault.conectado ? "CONECTADO" : "NO CONECTADO"}</h2>
        </div>
    );
};


ComponenteB.propTypes = {

};


export default ComponenteB;
