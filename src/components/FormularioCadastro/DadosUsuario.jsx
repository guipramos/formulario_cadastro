import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosUsuario({aoEnviar}){
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField 
                id="email" 
                label="email" 
                type="email" 
                required
                fullWidth 
                margin="normal"
            />
            <TextField 
                id="senha" 
                label="senha" 
                type="password" 
                required
                fullWidth 
                margin="normal"
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary" 
                margin="normal"
            >
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosUsuario;