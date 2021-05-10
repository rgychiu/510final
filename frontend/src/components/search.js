import { Row, Select } from 'antd';
import { useEffect, useState } from 'react';
import apiWrapper from '../api'
import SearchResults from './results.js';

function SearchBar() {
    const [titles, setTitles] = useState([])
    const [results, setResults] = useState([])

    useEffect(() => {
        async function fetchData() {
            const movieTitles = await (await apiWrapper.getTitles()).data.result.data;
            setTitles(movieTitles);
        }

        fetchData();
    }, [])

    const onSelect = (title) => {
        async function getRecs() {
            const recs = await (await apiWrapper.getRecommendations(title)).data.result.data;
            setResults(recs);
        }

        getRecs();
    }

    return (
        <>
            <Row justify='center' className='padding-sm'>
                <Select 
                    showSearch
                    className='margin-top-lg' 
                    // id='movie-search' 
                    placeholder="Movie Title ..." 
                    onSelect={onSelect}
                    optionFilterProp='children'
                    filterOption={(input, option)=> 
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {titles.map((item, idx) => {
                        return (<Select key={idx} value={item}>{item}</Select>);
                    })}
                </Select>
            </Row>

            {results.length ? <SearchResults titles={results} /> : <Row className='margin-top-lg'></Row>}
            
        </>
    );
}

export default SearchBar;