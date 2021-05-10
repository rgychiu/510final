import { List, Button, Row } from 'antd';
import { useEffect, useState } from 'react';
import TitleTags from './tags.js';
import apiWrapper from '../api';

function MovieList (props) {
    const [titles, setTitles] = useState([])
    const [displayedTitles, setDisplayedTitles] = useState([])

    useEffect(() => {
        async function fetchData() {
            const movieTitles = await apiWrapper.getTitles();
            setTitles(movieTitles.data.result.data);
            setDisplayedTitles(movieTitles.data.result.data.slice(0, 6));
        }

        fetchData();
    }, [])

    const addTitles = () => {
        const nextLen = Math.min(displayedTitles.length + 10, titles.length);
        setDisplayedTitles(titles.slice(0, nextLen));
    }

    return (
        <>
            <List
                className='padding-sm'
                itemLayout='horizontal'
                dataSource={props.all ? titles : displayedTitles}
                renderItem={item => {
                    return (
                        <List.Item>
                            <List.Item.Meta
                                className='text-white'
                                title={item}
                            />
                            <TitleTags title={item}/>
                        </List.Item>
                    )
                }}
            />
            {displayedTitles.length < titles.length && !props.all ? 
                <Row justify='center' className='padding-sm'>
                    <Button onClick={addTitles} type='primary'>See More</Button>
                </Row> : 
            null}
            
        </>
    );
}

export default MovieList;