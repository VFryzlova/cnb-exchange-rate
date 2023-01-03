import styled from 'styled-components'

export const Section = styled.section`
    padding: 16px 8px;
    
    form {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-width: 400px;

        button {
            height: auto;
            padding: 4px 8px;
            align-self: flex-end;
        }
    }

    .result {
        margin-top: 18px;
    }
`