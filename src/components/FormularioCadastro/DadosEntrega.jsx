import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosEntrega(){
    return (
        <form>
            <TextField 
                id="cep" 
                label="cep" 
                type="number" 
                required
                fullWidth 
                margin="normal"
            />
            <TextField 
                id="endereco" 
                label="endereço" 
                type="text" 
                required
                fullWidth 
                margin="normal"
            />
            <TextField 
                id="numero" 
                label="numero" 
                type="number" 
                required
                fullWidth 
                margin="normal"
            />
            <TextField 
                id="estado" 
                label="Estado" 
                type="text" 
                required
                margin="normal"
            />
            <TextField 
                id="cidade" 
                label="Cidade" 
                type="text" 
                required
                margin="normal"
            />
            <Button 
                type="submit"
                variant="contained" 
                color="primary" 
                margin="normal"
                fullWidth
            >
                Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;