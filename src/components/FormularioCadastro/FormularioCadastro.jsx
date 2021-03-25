import React, { useState } from 'react';

import {TextField, Switch, Button, FormControlLabel } from '@material-ui/core';

function FormularioCadastro(){

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');

    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(nome, sobrenome);
            }}
        >
            <TextField 
                value={nome}
                onChange={event => {
                    let tmpNome = event.target.value;
                    if(tmpNome.length >= 3){
                        tmpNome = tmpNome.substr(0, 3);
                    }
                    setNome(tmpNome);
                    

                }}
                type="text" 
                id="nome" 
                label="Nome" 
                fullWidth 
                margin="normal"
            />

            <TextField 
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
                type="text" 
                id="sobrenome" 
                label="Sobrenome" 
                fullWidth 
                margin="normal"
            />

            <TextField 
            type="text" 
                id="cpf" 
                label="CPF" 
                fullWidth 
                margin="normal"
            />

            <FormControlLabel 
                label="promocoes" 
                control={<Switch name="promocoes" defaultChecked color="primary" label="Secondary" />} 
            />
            
            <FormControlLabel 
                label="novidades" control={<Switch name="novidades" defaultChecked color="primary" label="Secondary"/>} 
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
    )
}

export default FormularioCadastro;