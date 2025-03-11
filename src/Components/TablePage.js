import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TablePage() {
    let [table, settable] = useState(null)
    const fetchdata = async () => {
        try {
            let response = await axios.get("http://localhost:3002/fetchdata")
            console.log(response)
            console.log(response.data)
            settable(response.data)
        }
        catch (err) {
            console.log(err)

        }

    }

    useEffect(() => {
        fetchdata()
    }, [])
  return (
    <div className='w-100 vh-100 d-grid justify-content-space ' >
        <div className='w-50'>
        <table>
            <thead>
                <tr>
                    <th>
                        _id
                    </th>
                    <th>
                        email
                    </th>
                    <th>
                        password
                    </th>
                    <th>
                        address
                    </th>
                    <th>
                        state
                    </th>
                     {/* <th>
                         <button>Add</button> 
                    </th>  */}
                </tr>
            </thead>
            <tbody>
            {table && table.map((credentials) => (
             
            <tr>
                <td>{credentials._id}</td>
                <td>{credentials.Email}</td>
                <td>{credentials.Password}</td>
                <td>{credentials.Address}</td>
                <td>{credentials.state}</td>
                {/* <td><button>add</button></td> */}
                
             </tr>
            ))
            }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default TablePage