import styled from 'styled-components'

export const Section = styled.section`
    padding: 0;
    padding-top: 16px;

    .currency-row {
        display: flex;
        width: 100%;
        gap: 16px;
        justify-content: center;
        padding: 0 8px;

        &:not(:nth-child(2)) span {
            flex: 1;
            text-align: left
        }

        &:nth-child(2),
        &:nth-child(3) {
            font-weight: bold;
        }

        &:nth-child(even) {
            background-color: rgb(224, 224, 224);
        }

        &:nth-child(odd) {
            background-color: rgb(255, 255, 255);
        }

        &:last-child {
            border-radius: 0 0 8px 8px;
        }
    }
`