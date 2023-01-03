const fetchData = async () => {
    const apiResp = await fetch('http://localhost:3000/data')

    if (!apiResp.ok) throw new Error ('fetch not ok')

    const respToText = await apiResp.text()
    const data = respToText.split('\n').slice(0, -1)
    
    return data.map(item => item.split('|'))
}

export default fetchData