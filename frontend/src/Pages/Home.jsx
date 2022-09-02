import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Filter from './Filter'
export default function Home() {

    const [info, setinfo] = useState([])
    const [filtered, setfiltered] = useState([])
    const getData = async () => {
        const { data } = await axios.get("http://localhost:5000/estate")
        setinfo(data)
        setfiltered(data)
    }

    const addFilters = (location, availability, price, type) => {
        console.log("values sent to home =" + location, availability, price, type)
        setfiltered(info)
        const result = filtered.filter(item => item.location == location && item.availability == availability && item.price > price && item.type == type)
        console.log(result);
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Filter info={info} setinfo={setinfo} addFilters={addFilters} />
            <div className="container">
                <div className="row">
                    {
                        filtered && filtered.map(item => <div className='col-sm-4'>
                            <div className="card">
                                <div className="card-header">{item.title}</div>
                                <div className="card-body"><img className='img-fluid' src={item.image} /></div>
                                <div className="card-footer">{item.subHeading}</div>
                                <Link to="/details">Read  More...</Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}
