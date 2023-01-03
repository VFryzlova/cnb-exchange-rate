import { useQuery } from "react-query";
import fetchData from "../.././fetchData";
import { Section } from './styles'

const ExchangeRates = () => {
    const fetchResults = useQuery('rates', fetchData);

    if (fetchResults.isLoading) return <div>Loading..</div>

    const rates = fetchResults?.data ?? []

    return (
        <Section className="exchange-rates">
            <h2>Latest currency exchange rates</h2>
            {rates.map((item) => (
                <div className="currency-row" key={item[0]}>
                    <span>{item[0]}</span>
                    <span>{item[1]}</span>
                    <span>{item[2]}</span>
                    <span>{item[3]}</span>
                    <span>{item[4]}</span>
                </div>
            ))}
        </Section>
    )
}

export default ExchangeRates