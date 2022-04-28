import styled from "styled-components";

export const Container = styled.div`
    .main {
        justify-content: space-between;
        display: flex;
        align-items: center;
        margin: 0 1.5rem;
        position: relative;
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

    .caixas{
        background: var(--light-gray);
        height: 10rem;
        width: 18rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 32px;

    }

    p {
        font-size: 2rem;
        color: var(--white);
    }

`;