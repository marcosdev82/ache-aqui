# Localizador de Estabelecimentos - React Native

## Descrição
Este é um aplicativo desenvolvido em **React Native**, que utiliza **inteligência artificial** para localizar estabelecimentos comerciais nas proximidades. O objetivo é conectar comerciantes e clientes de maneira eficiente, oferecendo recomendações personalizadas de estabelecimentos com base na localização do usuário. O aplicativo também conta com um **sistema de chat** integrado via WhatsApp, facilitando o contato direto entre os comerciantes e seus clientes.

## Funcionalidades
- **Localização de estabelecimentos**: O aplicativo utiliza geolocalização para identificar e exibir os estabelecimentos mais próximos do usuário.
- **Recomendações personalizadas**: Através de uma API de inteligência artificial (Chat GPT-4), o aplicativo recomenda estabelecimentos de acordo com as preferências e dados da comunidade.
- **Chat integrado**: O sistema de chat via WhatsApp permite que clientes e comerciantes se comuniquem de forma rápida e direta.
- **Gerenciamento de dados**: O backend, utilizando Node.js, PostgreSQL e TypeORM, gerencia as operações de CRUD (criação, leitura, atualização e exclusão) dos estabelecimentos, garantindo que as informações estejam sempre atualizadas.

## Tecnologias Utilizadas
- **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma (iOS e Android).
- **TypeScript**: Linguagem utilizada para garantir a tipagem estática e melhorar a manutenção do código.
- **Node.js**: Servidor utilizado para gerenciar as operações do backend.
- **TypeORM**: ORM para manipulação do banco de dados de maneira eficiente.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as informações dos estabelecimentos.
- **API GPT-4**: Responsável pelas recomendações de estabelecimentos com base em inteligência artificial.
- **WhatsApp API**: Para o sistema de chat que conecta diretamente comerciantes e clientes.

## Como Instalar e Executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/localizador-estabelecimentos.git
