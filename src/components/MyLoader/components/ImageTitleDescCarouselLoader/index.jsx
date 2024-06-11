import React from 'react';
import ContentLoader from 'react-content-loader';

const ImageTitleDescCarouselLoader = () => {
    return (
        <div className='' style={{margin: "30px 0"}}>
            <ContentLoader
                viewBox={`0 0 ${1088} ${192}`}
                height={192}
                width={1088}
                color='#fff'
            >
                <rect x="0" y="0" rx="10" ry="10" width="170" height="136" />
                <rect x="184" y="0" rx="10" ry="10" width="170" height="136" />
                <rect x="368" y="0" rx="10" ry="10" width="170" height="136" />
                <rect x="552" y="0" rx="10" ry="10" width="170" height="136" />
                <rect x="736" y="0" rx="10" ry="10" width="170" height="136" />
                <rect x="920" y="0" rx="10" ry="10" width="170" height="136" />
                <rect x="736" y="0" rx="10" ry="10" width="170" height="136" />
            </ContentLoader>
        </div>
    )
}

export default ImageTitleDescCarouselLoader

