import React, { Component } from "react";
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto';

class App extends Component {
    render(){
        return (
            <Container maxWidth="sm" component="article">
                <Typography 
                    variant="h3" 
                    component="h1"
                    align="center">
                    Formulario de cadastro
                </Typography>
                <FormularioCadastro />
            </Container>
        );
    }
}

export default App;
