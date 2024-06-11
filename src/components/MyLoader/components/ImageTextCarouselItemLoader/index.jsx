import React from 'react';
import ContentLoader from 'react-content-loader';

const ImageTextCarouselItemLoader = () => {
    return (
        <div className='' style={{margin: "30px 0"}}>
            <ContentLoader
                viewBox={`0 0 ${1088} ${290}`}
                height={290}
                width={1088}
                color='#fff'
            >
                <rect x="0" y="0" rx="10" ry="10" width="210" height="290" />
                <rect x="220" y="0" rx="10" ry="10" width="210" height="290" />
                <rect x="440" y="0" rx="10" ry="10" width="210" height="290" />
                <rect x="660" y="0" rx="10" ry="10" width="210" height="290" />
                <rect x="880" y="0" rx="10" ry="10" width="210" height="290" />
            </ContentLoader>
        </div>
    )
}

export default ImageTextCarouselItemLoader
