import React, { useState, useEffect } from 'react';
import VMasker from 'vanilla-masker';
import axiosGet from '../../utility/funcs';
import { Input } from '../../components';
import './Form.scss';

export default function Form() {
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('Rua');
  const [neiborhood, setNeiborhood] = useState('Bairro');
  const [city, setCity] = useState('Cidade');
  const [state, setState] = useState('Estado');
  const [IBGE, setIBGE] = useState('IBGE');

  const handleChange = async (e) => {
    const regZipCode = e.target.value.replace(/([.-])/g, '');
    setZipCode(regZipCode);

    if (zipCode.length === 8) {
      const res = await axiosGet(regZipCode);
      if (!res.data.erro) {
        setStreet(res.data.logradouro);
        setNeiborhood(res.data.bairro);
        setCity(res.data.localidade);
        setState(res.data.uf);
        setIBGE(res.data.ibge);
      }
    }
  };

  useEffect(() => {
    const cepInput = document.querySelector('.Cep');
    VMasker(cepInput).maskPattern('99.999-999');
  }, []);

  return (
    <div className="form">
      <Input cep handleChange={handleChange} />

      <Input cep={false} other={street} />

      <Input cep={false} other={neiborhood} />

      <Input cep={false} other={city} />

      <Input cep={false} other={state} />

      <Input cep={false} other={IBGE} />

    </div>
  );
}
