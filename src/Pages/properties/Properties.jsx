import React from 'react';
import Estate from './Estate';

const Properties = ({estates}) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-12">Find your property</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    estates.map(estate=><Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Properties;