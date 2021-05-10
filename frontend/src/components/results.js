import { Carousel, Row, Typography } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import apiWrapper from '../api';

function SearchResults (props) {
    const [titleUrls, setTitleImgs] = useState([]);

    useEffect(() => {
        async function getImages() {
            var titleImgs = [];
            for (var i = 0; i < props.titles.length; i++) {
                const imgUrl = await (await apiWrapper.getTitleImg(props.titles[i])).data.result.data;
                titleImgs.push(imgUrl);
            }
            setTitleImgs(titleImgs);
        }

        getImages();
    }, [props])


    return (
        <>
            <Row justify='center'>
                <Typography.Title level={3} className='text-white margin-top-xl'>Search Results</Typography.Title>
            </Row>
            <Carousel 
                arrows 
                nextArrow={<ArrowRightOutlined />} 
                prevArrow={<ArrowLeftOutlined/>}
                className='padding-sm'
            >
                {props.titles.map((item, idx) => {
                    return (
                        <div key={idx} className='text-center padding-sm'>
                            <img className='padding-sm' src={titleUrls[idx]} alt='Movie poster'></img>
                            <h3 style={{color: 'white'}} className='padding-sm'>{item}</h3>
                        </div>
                    )
                })}
            </Carousel>
        </>
    );
}

export default SearchResults;