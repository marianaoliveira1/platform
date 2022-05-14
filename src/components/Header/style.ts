import styled from "styled-components";

export const Container = styled.div`
    .member {
        justify-content: space-between;
        display: flex;
        align-items: center;

        position: relative;
        gap: 1rem;
    }

    h1 {
        color: var(--white);
        font-weight: 500;
    }

    h2 {
        color: var(--light-gray);
        font-weight: 400;
    }

    button {
        background: var(--blue);
        color: var(--white);

        border: none;
        height: 3rem;
        width: 10rem;


        &:hover{
            cursor: pointer;
        }
    }

    .container-caixas {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .caixas{
        background: var(--gray-background);
        height: 10rem;
        width: 18rem;
        display: grid;
        justify-content: center;
        flex-direction: column;
        padding: 0 32px;
        column-gap: 30px;

    }
    h3 {
        color: var(--light-gray) ;
    }

    p {
        font-size: 2rem;
        color: var(--white);
        margin: 10px;
    }

`;