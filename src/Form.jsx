import React, { useState } from 'react'
import './App.css';
const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const submit = (e) => {
        e.preventDefault();


        console.log('Form Submitted With Name:', name);
        setName('');

        console.log('Form Submitted With age:', age);
        setAge('');

        console.log('Form Submitted With City:', city);
        setCity('');

        console.log('Form Submitted With Address:', address);
        setAddress('');


    };
    return (

        <form onSubmit={submit}>
            <div className="container">
                <div>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>


    );

};

export default Form;