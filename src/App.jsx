import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query";
import ExchangeRates from './components/ExchangeRates/index.jsx'
import CustomExchangeRate from './components/CustomExchangeRate/index.jsx'
import { GlobalStyles } from "./styles";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10 * (60 * 1000),
            cacheTime: 15 * (60 * 1000),
        }
    }
})

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <main>
                <h1>CNB exchange rate</h1>
                <div className="exchange-wrapper">
                    <ExchangeRates />
                    <CustomExchangeRate />
                </div>
            </main>
        </QueryClientProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)