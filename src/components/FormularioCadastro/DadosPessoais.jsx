import React, { useState } from 'react';

import {TextField, Switch, Button, FormControlLabel } from '@material-ui/core';

function DadosPessoais({aoEnviar, validarCPF}){

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf: {valido: true, texto: ""}});

    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
            }}
        >
            <TextField 
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                type="text" 
                id="nome" 
                label="nome" 
                required
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
                required
                fullWidth 
                margin="normal"
            />

            <TextField 
                onChange={event => {
                    setCpf(event.target.value);
                }}
                onBlur={(event) => {
                    const ehValido = validarCPF(cpf);
                    setErros({cpf: ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                type="text" 
                id="cpf" 
                label="CPF" 
                required
                fullWidth 
                margin="normal"
            />

            <FormControlLabel 
                label="promocoes" 
                control={
                    <Switch 
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }} 
                        name="promocoes" 
                        color="primary" 
                        label="Secondary" 
                    />
                } 
            />
            
            <FormControlLabel 
                label="novidades" 
                control={
                    <Switch
                        checked={novidades} 
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }} 
                        name="novidades" 
                        color="primary" 
                        label="Secondary"
                    />
                } 
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

export default DadosPessoais;