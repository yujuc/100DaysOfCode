import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from "./CountryPicker.module.css"

import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCoutries] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () => {
            setFetchedCoutries(await fetchCountries());
        }
        
        fetchAPI();
    }, [fetchedCountries]);

    return ( <FormControl className={styles.formControl}>
        <NativeSelect default="" onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {fetchedCountries.map((country, index)=>(<option key={index} value={country}>{country}</option>))}
        </NativeSelect>

    </FormControl> );
}
 
export default CountryPicker;