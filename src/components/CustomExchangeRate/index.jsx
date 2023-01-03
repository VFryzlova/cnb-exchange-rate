import { useState } from "react";
import { useQuery } from "react-query";
import fetchData from "../.././fetchData";
import { Section } from './styles'

const CustomExchangeRate = () => {
    const [result, setResult] = useState('')
    const fetchResults = useQuery('rates', fetchData);

    if (fetchResults.isLoading) return <div>Loading..</div>

    const rates = fetchResults?.data.slice(2) ?? []

    // Calculate the currency exhange
    const calculateExchange = ({amount, currency}) => {
        setResult(() => {
            const rate = rates.find(item => item[3] === currency)
            return rate ? (Number(amount) / Number(rate[4])).toFixed(2) : 'Select the amount and currency'
        })
    }

    return (
        <Section className="custom-exchange-rate">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target)
                    const formDataObj = {
                        amount: formData.get('amount') ?? 0,
                        currency: formData.get('currency') ?? ''
                    }
                    calculateExchange(formDataObj)
                }}>

                <label htmlFor="amount">
                    <h2>Amount in CZK</h2>
                    <input id="amount" placeholder="0" name="amount" />
                </label>

                <label htmlFor="currency">
                    <h2>Currency</h2>
                    <select id="currency" name="currency">
                        <option />{rates.map(item => <option key={item[0]}>{item[3]}</option>)}
                    </select> 
                </label>

                <button>Convert</button>
            </form>
            <div className="result">{result}</div>
        </Section>
    )
}

export default CustomExchangeRate