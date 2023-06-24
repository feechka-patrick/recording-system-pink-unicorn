import styled from "@emotion/styled";

// top, right, bottom, left

export const Container = styled.div`
    height: 100vh;
    background-color: var(--main-container-background);
    padding: 20px 40px 0px;
    display: flex;
    flex-direction: column;
    @media (min-width: 800px) {
        align-items: center;
    }
`

export const Content = styled.div`
    width: max-content;
`