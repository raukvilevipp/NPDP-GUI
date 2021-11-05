import dateFormat from 'dateformat'
import React from 'react'
import { useEffect } from 'react'
const now = new Date()

const entsoeTimeFormat = 'yyyymmddHH00'

const start = dateFormat(now, entsoeTimeFormat)
const end = dateFormat(now.setHours(now.getHours() + 12), entsoeTimeFormat)

const Prices = () => {
    const token = process.env.REACT_APP_ENTSOE_TOKEN
    console.log(token)
    const url =
        'https://transparency.entsoe.eu/api?documentType=A44&in_Domain=10YNO-1--------2&out_Domain=10YNO-1--------2&periodStart=' +
        start +
        '&periodEnd=' +
        end +
        '&securityToken=' +
        token

    const [response, setResponse] = React.useState('')

    useEffect(() => {
        fetch(url) // { mode: "no-cors" })
            .then(response => response.text())
            .then(data => setResponse(data))
            .catch((error) => {
                console.log(error);
            })

    }, [])

    return <p>Hei, {response}</p>
}

export default Prices
