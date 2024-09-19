import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Container, Preloader, Logotipo, Title } from './styles';
import Logo from './../../assets/logo.png'; // Caminho da imagem do logo

export const Home: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento de dados (3 segundos)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <Preloader>
        <Logotipo source={Logo} />
        <ActivityIndicator size={60} color="yellow" />
      </Preloader>
    );
  }

  return (
    <Container>
      <Title>Home page</Title>
    </Container>
  );
};
