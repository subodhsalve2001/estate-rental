import React from 'react'
import { useState } from "react"

export default function Filter({ info, setinfo, addFilters }) {
    const [values, setvalues] = useState([])

    const handleFilters = async () => {

        const { location } = values[0]
        const { availability } = values[1]
        const { price } = values[2]
        const { type } = values[3]
        console.log(location, availability, price, type);
        addFilters(location, availability, price, type)
        setvalues([])
    }

    return (
        <>
            <div className='container text-center'>
                <h1>Real Eastate Property</h1>
            </div>
            <div className="container my-4 d-flex justify-content-around">
                <div className="mx-2 d-inline-block">
                    <p className='m-0'>Location</p>
                    <select onChange={e => setvalues([...values, { location: e.target.value }])} className='form-select'>
                        <option value="New York">New York</option>
                        <option value="Landon">Landon</option>
                        <option value="Dubai">Dubai</option>
                    </select>
                </div>
                <div className="mx-2 d-inline-block">
                    <p className='m-0'>Date</p>
                    <select onChange={e => setvalues([...values, { availability: e.target.value }])} className='form-select'>
                        <option value="june-july">June-July</option>
                        <option value="aug-sept">Aug-Spet</option>
                        <option value="oct-nov">Oct-Nov</option>
                    </select>
                </div>
                <div className="mx-2 d-inline-block">
                    <p className='m-0'>Price</p>
                    <select onChange={e => setvalues([...values, { price: e.target.value }])} className='form-select'>
                        <option value="3000">Below 3000$</option>
                        <option value="3500">Below 3500$</option>
                        <option value="4000">Below 4000$</option>
                    </select>
                </div >
                <div className="mx-2 d-inline-block">
                    <p className='m-0'>Property Type</p>
                    <select onChange={e => setvalues([...values, { type: e.target.value }])} className='form-select'>
                        <option value="Houses">Houses</option>
                        <option value="Land">Land</option>
                        <option value="Industrial">Industrial</option>
                    </select>
                </div >
                <button onClick={handleFilters} className='btn btn-outline-primary'>Search</button>
            </div >

        </>
    )
}
