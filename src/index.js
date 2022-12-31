// React (+Hooks), TypeScript, Styled Components, React Query
// API: https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt


// retrieve the latest currency exchange rates
fetch('http://localhost:3000/data')
    .then(response => response.text())
    .then(data => console.log(data.split('\n').slice(2)))


// clearly displays the data to the user in the UI

// form, into which the customer can enter an amount in CZK and select a currency, 
//and after clicking a button sees the amount entered in CZK converted into the selected currency