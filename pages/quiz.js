import React from 'react';
import { Router, useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function QuizPage() {
  const router = useRouter();
  console.log(router.query.name);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Bem vindo ao quiz, infelizmente terá que aguardar as próximas aulas </h1>
          </Widget.Header>
          
          <Widget.Content>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Obrigado por tentar {router.query.name}, nos vemos em breve</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
        <GitHubCorner />
    </QuizBackground>
  );
}
