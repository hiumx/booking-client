import React from 'react';
import ContentLoader from 'react-content-loader';

const HistorySearchLoader = () => {
    return (
        <div className=''>
            <ContentLoader
                viewBox={`0 0 ${1088} ${76}`}
                height={76}
                width={1088}
                color='#fff'
            >
                <rect x="0" y="0" rx="10" ry="10" width="254" height="76" />
                <rect x="270" y="0" rx="10" ry="10" width="254" height="76" />
                <rect x="540" y="0" rx="10" ry="10" width="254" height="76" />
                <rect x="810" y="0" rx="10" ry="10" width="254" height="76" />
            </ContentLoader>
        </div>
    )
}

export default HistorySearchLoader
 