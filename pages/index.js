import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
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
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
