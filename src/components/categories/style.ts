import styled from "styled-components";

export const CategoriesContainer = styled.div`
    width: 200px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -180px;
    background: var(--secondary);
    border-right: 5px solid var(--primary-light);
    padding: 15px;
    transition: 0.5s all;
    z-index: 10;
    color: var(--primary-light);

    &:hover{
        left: 0;
    }

    h3{
        margin-bottom: 10px;
    }

    ul{
        list-style-type: none;
    }

    li{
        cursor: pointer;
        margin-bottom: 10px;
        width: auto;
        height: 20px;
        border-radius: 10px;
        padding-left: 10px;
    }

    li:hover{
        margin-left: 10px;
    }

    li:last-child{
        margin-top: 25px;
    }

`;

export const Arrow = styled.div`
    position: absolute;
    background: var(--secondary);
    border: 2px solid var(--primary-light);
    width: 25px;
    height: 25px;
    top: calc(50% - 14px);
    right: -15px;
    border-radius: 50%;
    display: grid;
    justify-items: center;
    align-items: center;
`;