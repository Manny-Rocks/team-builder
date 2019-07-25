import React, { useState } from 'react'

const Person = props => {

    const [person, setPerson] = useState(props.person)

    const [editing, setEditing
    ] = useState(false)

    const handleChange = e => setPerson({ ...person, [e.target.name]: e.target.value })

    console.log(person)

    if (editing) {

        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                props.update(person)
                setEditing(!editing)
            }} className='update-form'>
                <label htmlFor="name">
                    Name:<input type="text" onChange={handleChange} value={person.name} name='name' />
                </label>
                <label htmlFor="email">
                    Email:<input type="text" onChange={handleChange} value={person.email} name='email' />
                </label>
                <label htmlFor="role">
                    Role:<input type="text" onChange={handleChange} value={person.role} name='role' />
                </label>
                <button>Update</button>
            </form>
        )

    } else {

        return (
            <div className="person">

                <sup onClick={() => props.del(props.person)}>X</sup>

                <h3>Name: {props.person.name}</h3>
                <h3>Email: {props.person.email}</h3>
                <h3>Role: {props.person.role}</h3>

                <button onClick={() => setEditing(!editing)}>Edit Added Person</button>

            </div>
        )

    }

}

export default Person