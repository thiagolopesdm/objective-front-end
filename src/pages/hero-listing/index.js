import React from 'react';
import axios from 'axios';

import createHash from '../../utils/createHash';

import Text from '../../components/ui/Text';
import Input from '../../components/ui/Input';
import TableHeader from '../../components/table/header';
import TableBody from '../../components/table/body';
import Pagination from '../../components/ui/Pagination';

import history from '../../services/history';

import { StyledContainer, SearchBar, PageTitle } from './styles';

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postPerPage] = React.useState(10);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const filteredHeroes = items
    .slice(indexOfFirstPost, indexOfLastPost)
    .filter((hero) => {
      return hero.name.includes(search);
    });

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

  const goToPage = (hero) => history.push(`/hero/${hero.id}/detail`);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledContainer>
      <PageTitle>Busca de Personagens</PageTitle>
      <SearchBar>
        <Text weight="bold" style={{ marginBottom: '8px' }}>
          Nome do Personagem
        </Text>
        <Input value={search} onChange={handleChange} icon="search" />
      </SearchBar>
      <TableHeader />
      <TableBody items={filteredHeroes} handleClick={goToPage} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={items.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </StyledContainer>
  );
}
