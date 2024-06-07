import React from 'react';
import ContentLoader, { Facebook } from 'react-content-loader';


const FeedbackItemLoader = () => {
    return (
        <div>
            <ContentLoader
                viewBox={`0 0 ${120} ${64}`}
                height={64}
                width={120}
            >
                <rect x="0" y="0" rx="5" ry="5" width="58" height="24" />
                <rect x="0" y="28" rx="5" ry="5" width="58" height="14" />
                <rect x="0" y="46" rx="5" ry="5" width="120" height="14" />
                <rect x="62" y="0" rx="5" ry="5" width="38" height="32" />
            </ContentLoader>
        </div>
    )
}

export default FeedbackItemLoader
