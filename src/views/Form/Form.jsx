import React, { useState } from 'react';
import { Input } from '../../components';
import './Form.scss';

export default function Form() {
  const [zipCode, setZipCode] = useState('');

  const handleChange = (e) => {
    setZipCode(e.target.value);
  };

  return (
    <div className="form">
      <Input cep handleChange={handleChange} />

      <Input cep={false} other="Rua" />

      <Input cep={false} other="Bairro" />

      <Input cep={false} other="Cidade" />

      <Input cep={false} other="Estado" />

      <Input cep={false} other="IBGE" />

    </div>
  );
}
