import React from 'react'
import { AsyncPaginate} from 'react-select-async-paginate'
import {useState} from 'react'
import { url,options } from '../../API'

export default function Search({searchOutput}) {
    const [search,setSearch]=useState(null)
    const handleSearch = (search)=>{
        setSearch(search)
        searchOutput(search)
    }

    const loadOptions = (value) => {
        return fetch(
          `${url}/cities?minPopulation=1000000&namePrefix=${value}`,
          options 
        )
          .then((response) => response.json())
          .then((response) => {
            return {
              options: response.data.map((city) => {
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          });
      };
  return (
    <AsyncPaginate placeholder="Search for City" 
                    debounceTimeout={600}
                    value={search}
                    onChange={handleSearch}
                    loadOptions={loadOptions}

                     /// attribue
    />
  )
}
