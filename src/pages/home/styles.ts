import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.grey200};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Preloader = styled.View`
    background-color: ${({ theme }) => theme.colors.green200};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logotipo = styled.Image`
    width: 100px;  
    height: 100px; 
    margin-bottom: 40px;
`;
