import React from 'react';
import data from '../data';
import Card from '../components/Card';

const Home = () => {
    return (
        <div>
            <div className='Cards_container'>
            {data.products.map((product)=>(
                <Card key={product.id} title={product.title} id={product.id} imgsrc={product.imgsrc} prise={product.prise} detail={product.detail} slug={product.slug} />
            ))}
            </div>
        </div>
    )
}

export default Home
