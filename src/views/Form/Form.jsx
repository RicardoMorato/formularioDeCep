import React, { useState, useEffect } from 'react';
import VMasker from 'vanilla-masker';
import axiosGet from '../../utility/funcs';
import { Input } from '../../components';
import './Form.scss';

export default function Form() {
  const [zipCode, setZipCode] = useState('');

  const handleChange = async (e) => {
    const regZipCode = e.target.value.replace(/([.-])/g, '');
    setZipCode(regZipCode);

    if (zipCode.length === 8) {
      const res = await axiosGet(regZipCode);
      console.log(res.data);
    }
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
