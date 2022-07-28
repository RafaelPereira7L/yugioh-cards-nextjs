import type { NextPage } from 'next';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { cardApi, randomCardApi } from '../utils/api';
import { ApiResponse } from '../utils/ApiResponseTypes';

const Card: NextPage = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState({} as ApiResponse);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      try {
        const data = await cardApi(name);
        setData(data);
        console.log(data);
        setName('');
        setSuccess(true);
      } catch (error) {
        alert('Carta não encontrada!');
        setSuccess(false);
      }
    }
  };

  const randomCard = async () => {
    try {
      const data = await randomCardApi();
      setData(data);
      console.log({ data });
      setName('');
      setSuccess(true);
    } catch (error) {
      console.log(data);
      setSuccess(false);
    }
  };

  const type = () => {
    if (data.type === 'Normal Monster') {
      return 'Monstro';
    } else if (data.type === 'Effect Monster') {
      return 'Efeito';
    } else if (data.type === 'Spell Card') {
      return 'Feitiço';
    } else if (data.type === 'Trap Card') {
      return 'Armadilha';
    } else if (data.type === 'Fusion Monster') {
      return 'Fusão';
    } else if (data.type === 'Synchro Monster') {
      return 'Sincro';
    } else {
      return data.type;
    }
  };

  const star = '\u272A';

  return (
    <>
      <nav>
        <div className="bg-zinc-800 p-6 shadow-md">
          <div className="flex flex-col text-white justify-around font-medium">
            <input
              type="search"
              value={name}
              onChange={(event) => setName(event.target.value)}
              onKeyPress={handleSubmit}
              className="bg-zinc-300 px-8 py-2 focus:outline-none focus:ring focus:ring-red-400 ease-in-out duration-150 text-center text-black font-medium rounded-lg m-auto"
              placeholder="Informe uma carta"
            ></input>
            <button
              id="button"
              className="px-4 py-2 max-w-xs m-auto mt-2 bg-red-500 focus:outline-none focus:ring focus:ring-red-400 ease-in-out duration-150 rounded-lg text-white"
              onClick={() => randomCard()}
            >
              Carta aleatória
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`text-white shadow-md text-center p-6 mt-5 mb-10 m-auto flex-row justify-center lg:w-1/2 md:w-3/4 sm:w-3/4 rounded-lg bg-zinc-800 ${
          success == true ? 'block' : 'hidden'
        }`}
      >
        <h1 className="text-2xl font-bold mb-2">
          {data.name} {data.attribute ? ` - ${data.attribute}` : ''}
        </h1>
        <Image
          className="pointer-events-none"
          src={`https://storage.googleapis.com/ygoprodeck.com/pics/${data.id}.jpg`}
          alt="card-name"
          width={250}
          height={350}
        />
        <p className="text-xl font-medium text-start">
          [ {data.race} / {type()} ]
        </p>
        <p className="text-xl font-medium text-orange-400">
          {data.level ? `${data.level} ${star}` : ''}
        </p>
        <p className="text-base font-medium">{data.desc}</p>
        <div
          className={`flex flex-row justify-center gap-4 font-bold mt-2 p-2 bg-zinc-700 shadow-lg rounded-lg ${
            data.atk ? 'block' : 'hidden'
          }`}
        >
          <p>ATK / {data.atk}</p> <p> DEF / {data.def}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
