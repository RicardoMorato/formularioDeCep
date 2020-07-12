import React, { useState, useEffect } from 'react';
import VMasker from 'vanilla-masker';
import { Input } from '../../components';
import './Form.scss';

export default function Form() {
  const [zipCode, setZipCode] = useState('');

  const handleChange = (e) => {
    setZipCode(e.target.value);
  };

  useEffect(() => {
    const cepInput = document.querySelector('.Cep');

    VMasker(cepInput).maskPattern('99.999-999');
  }, []);

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
