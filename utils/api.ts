import axios from 'axios';

const URL_API = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
const URL_API_RANDOM = 'https://db.ygoprodeck.com/api/v7/randomcard.php';
const lang = 'pt';

export const cardApi = async (name: string) => {
  const {
    data: { data },
  } = await axios.get(URL_API, {
    params: {
      language: lang,
      name: name,
    },
  });
  return data[0];
};

export const randomCardApi = async () => {
  const { data } = await axios.get(URL_API_RANDOM);
  console.log(data);
  return data;
};
