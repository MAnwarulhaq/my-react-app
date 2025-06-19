import React from 'react'

const RadioandDropdown = () => {
    const [gender, setGender] = React.useState('male');
    const [city, setCity] = React.useState('islamabad');

    return (
        <div>
            <h3>Handle the Radio and Dropdown button In React</h3>
            <h2>Selct Gender</h2>
            <input type="radio" name='gender' onChange={(e) => setGender(e.target.value)} id='male' value={'male'} checked={gender === 'male'} />
            <label htmlFor="male">Male</label>
            <input type="radio" name='gender' onChange={(e) => setGender(e.target.value)} id='female' value={'female'} checked={gender === 'female'} />
            <label htmlFor="female">Female</label>
            <h1>Selected Gender:{gender}</h1>
            <br />
            <h1>Select your City</h1>

            <select name="city" id="city" defaultValue={'islamabad'} onChange={(e) => setCity(e.target.value)}>
                <option value="multan">Multan</option>
                <option value="islamabad">Islamabad</option>
                <option value="lahore">Lahore</option>
                <option value="karachi">Karachi</option>
            </select>
            <h1>Selected City:{city}</h1>

        </div>
    )
}

export default RadioandDropdown