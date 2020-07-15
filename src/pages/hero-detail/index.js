import React from 'react';
import axios from 'axios';

import createHash from '../../utils/createHash';

import Text from '../../components/ui/Text';

import {
  StyledContainer,
  StyledHeroInfosContainer,
  StyledHeroImage,
  StyledHeroInfos,
  StyledHeroSeries,
} from './styles';

export default function HeroDetail({ match }) {
  const [hero, setHero] = React.useState([]);

  function heroDetailRequest(id) {
    const timeStamp = Date.now().toString();

    const publicKey = 'a50eb346a09eb921b7a88826f1ad6a09';
    const hash = createHash(timeStamp);

    axios
      .get(`https://gateway.marvel.com/v1/public/characters/${id}`, {
        params: {
          ts: timeStamp,
          apikey: publicKey,
          hash,
        },
      })
      .then((response) => setHero(response.data.data.results));
  }

  React.useEffect(() => {
    heroDetailRequest(match.params.id);
  }, [match.params.id]);

  return (
    <StyledContainer>
      {hero.map((hero) => (
        <div key={hero.id}>
          <StyledHeroInfosContainer>
            <StyledHeroImage
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt="hero image"
            />
            <StyledHeroInfos>
              <h1>{hero.name}</h1>
              <p>{hero.description}</p>
            </StyledHeroInfos>
          </StyledHeroInfosContainer>
          <div style={{ marginTop: '5rem' }}>
            <Text size="26px" weight="bold">
              Aparições
            </Text>
            <div style={{ marginTop: '2rem' }}>
              <Text size="18px" weight="bold">
                Comics
              </Text>
              <StyledHeroSeries>
                {hero.series.items.map((comic) => (
                  <div key={Math.random()}>{comic.name}</div>
                ))}
              </StyledHeroSeries>
            </div>
            <div style={{ marginTop: '5rem' }}>
              <Text size="18px" weight="bold">
                Histórias
              </Text>
              <StyledHeroSeries>
                {hero.stories.items.map((comic) => (
                  <div key={Math.random()}>{comic.name}</div>
                ))}
              </StyledHeroSeries>
            </div>
            <div style={{ marginTop: '5rem' }}>
              <Text size="18px" weight="bold">
                Eventos
              </Text>
              <StyledHeroSeries>
                {hero.events.items.map((comic) => (
                  <div key={Math.random()}>{comic.name}</div>
                ))}
              </StyledHeroSeries>
            </div>
          </div>
        </div>
      ))}
    </StyledContainer>
  );
}
