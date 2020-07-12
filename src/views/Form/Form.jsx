import React from 'react';
import { Input } from '../../components';
import './Form.scss';

export default function Form() {
  return (
    <div className="form">
      <Input cep="true" />

      <Input cep="" other="Rua" />

      <Input cep="" other="Bairro" />

      <Input cep="" other="Cidade" />

      <Input cep="" other="Estado" />

      <Input cep="" other="IBGE" />

    </div>
  );
}
