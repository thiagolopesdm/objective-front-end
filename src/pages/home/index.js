import React from 'react';
import axios from 'axios';

import createHash from '../../utils/createHash';

import Text from '../../components/ui/Text';
import TableHeader from '../../components/table/header';
import TableBody from '../../components/table/body';

import Pagination from '../../components/ui/Pagination';

import { StyledContainer } from './styles';

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postPerPage] = React.useState(10);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  function heroesRequest() {
    const timeStamp = Date.now().toString();

    const publicKey = 'a50eb346a09eb921b7a88826f1ad6a09';
    const hash = createHash(timeStamp);

    axios
      .get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          ts: timeStamp,
          apikey: publicKey,
          hash,
        },
      })
      .then((response) => setItems(response.data.data.results));
  }

  React.useEffect(() => {
    heroesRequest();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPage = (item) => console.log(item);

  return (
    <StyledContainer>
      <Text size="32px" weight="bold">
        Busca de Personagens
      </Text>
      <TableHeader />
      <TableBody items={currentItems} handleClick={goToPage} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={items.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </StyledContainer>
  );
}
