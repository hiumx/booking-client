import React from 'react';
import ContentLoader, { Facebook } from 'react-content-loader';


const GroupImageLoader = () => {
    return (
        <div>
            <ContentLoader
                viewBox={`0 0 ${1076} ${364}`}
                height={358}
                width={1076}
            >
                <rect x="0" y="0" rx="5" ry="5" width="538" height="364" />
                <rect x="540" y="0" rx="5" ry="5" width="267" height="180" />
                <rect x="809" y="0" rx="5" ry="5" width="267" height="180" />
                <rect x="540" y="182" rx="5" ry="5" width="267" height="280" />
                <rect x="809" y="182" rx="5" ry="5" width="267" height="280" />
            </ContentLoader>
        </div>
    )
}

export default GroupImageLoader
