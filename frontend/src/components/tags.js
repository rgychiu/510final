import { Tag } from 'antd';
import { useEffect, useState } from 'react';    
import apiWrapper from '../api';

function TitleTags (props) {
    const [titleTags, setTitleTags] = useState([]);
    const [releaseDate, setReleaseDate] = useState('');

    useEffect(() => {
        async function getTags() {
            const tags = await (await apiWrapper.getTitleTags(props.title)).data.result.data;
            setTitleTags(tags);
        }

        async function getReleaseDate() {
            const date = await (await apiWrapper.getTitleRelease(props.title)).data.result.data;
            setReleaseDate(date);
        }

        getTags();
        getReleaseDate();
    }, [props.title])

    return (
        <div>
            <p style={{color: 'white', textAlign: 'right'}}>
                {titleTags.map(t => {
                    return (<Tag color='purple'>{t}</Tag>)
                })}
                <br />
                {releaseDate}
            </p>
        </div>
    );
}

export default TitleTags
