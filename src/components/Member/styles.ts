import styled from "styled-components";

export const Container = styled.div`
    * {
        padding-right: 10px;
    }
    #main {
        justify-content: space-between;
        display: flex;
        align-items: center;

        position: relative;
        gap: 1rem;
    }
    .text {
        flex-direction: column;
    }
    p {
        color: var(--light-gray);
    }

    h2 {
        color: var(--white);
        font: 400;
    }
    a {
        color: var(--blue);
        &:hover {
            cursor: pointer;
        }
    }

`; 