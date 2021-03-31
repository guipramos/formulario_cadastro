import React, { Component } from "react";
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto';

class App extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         resultado: []
    //     }
    // }

    render(){
        return (
            <Container maxWidth="sm" component="article">
                <Typography 
                    variant="h3" 
                    component="h1"
                    align="center">
                    Formulario de cadastro
                </Typography>
                <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
                {/* Resultado: {aoEnviarForm} */}
            </Container>
        );
    }
}

function aoEnviarForm(dados){
    // return this.setState({resultado: dados});
    console.log(dados);
}

function validarCPF(cpf){
    if(cpf.length !== 11){
        return {valido: false, texto: "CPF deve ter 11 digitos!"}
    }else{
        return {valido: true, texto: ""}
    }
}

export default App;
