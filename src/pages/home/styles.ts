import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props: => props.them.colors.white};
`;

export const Title = styled.Text`
    color: #f2f2f2;
`;

export const Preloader = styled.View`
    background-color: #118B59;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logotipo = styled.Image`
    width: 100px;  
    height: 100px; 
    margin-bottom: 40px;
`;
