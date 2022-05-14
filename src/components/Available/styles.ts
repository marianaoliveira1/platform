import styled from "styled-components";

export const Container = styled.div`
    .available {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text {
        flex-direction: column;
    }
    h1 {
        color: var(--white);
        font-weight: 500;
    }

    p {
        color: var(--light-gray);
        font-weight: 400;
    }

    .container {
        flex-direction: column;
    }

    .acoes {
        cursor: pointer;
        background: var(--gray-background);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 7rem;
        width: 55rem;
        &:hover {
            background: var(--white);
            color: black;
        }
    }
`