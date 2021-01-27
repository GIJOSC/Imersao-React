import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';



export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>Ainda não vai começar o Quiz</h1>
          </Widget.Header>

          <Widget.Content>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Teste seus conhecimentos sobre as Praias de Floripa</p>
          </Widget.Content>

          <Widget.Form>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input 
                onChange={function (infosDoEvento) {
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Digite o seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                COMEÇAR
              </button>
            </form>
          </Widget.Form>

        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <h1>Quiz de Floripa, manezinho DEV</h1>

            <p>Um pedacinho de terra,
perdido no mar!...
Num pedacinho de terra,
beleza sem par...
Jamais a natureza
reuniu tanta beleza
jamais algum poeta
teve tanto pra cantar!

Num pedacinho de terra
belezas sem par!
Ilha da moça faceira,
da velha rendeira tradicional
Ilha da velha figueira
onde em tarde fagueira
vou ler meu jornal.

Tua lagoa formosa
ternura de rosa
poema ao luar,
cristal onde a lua vaidosa
sestrosa, dengosa
vem se espelhar..."</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
