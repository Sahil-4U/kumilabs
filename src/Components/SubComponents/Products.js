import React, { useRef } from 'react';
import './Product.css';
import { Button } from 'react-bootstrap';
import vec1 from '../../images/Vector1.png';
import vec2 from '../../images/Vector2.png';
import vec3 from '../../images/Vector3.png';
import vec4 from '../../images/Vector4.png';
import vec5 from '../../images/Vector5.png';
import Produce from './Produce';
import Dairy from './Dairy';
import Meat from './Meat';
import Canned from './Canned';
import Frozen from './Frozen';
import Prepared from './Prepared';
import Bakery from './Bakery';


const Products = () => {
    const pro = useRef(null);
    const dairy = useRef(null);
    const meat = useRef(null);
    const canned = useRef(null);
    const frozen = useRef(null);
    const prepare = useRef(null);
    const bakery = useRef(null);


    const handleProduce = ()=>{
        pro.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handleDairy = ()=>{
        dairy.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handleMeat = ()=>{
        meat.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handleCanned = ()=>{
        canned.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handleFrozen = ()=>{
        frozen.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handlePrepare = ()=>{
        prepare.current?.scrollIntoView({behaviour:'smooth'});
    }
    const handleBakery = ()=>{
        bakery.current?.scrollIntoView({behaviour:'smooth'});
    }
    return (
        <div className='ProductsContainer'>
            <div className='sidebar'>
                <div>
                    <img src={vec1} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleProduce}>Produce</Button>{' '}
                </div>
                <div>
                    <img src={vec2} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handlePrepare}>Prepared foods</Button>{' '}
                </div>
                <div>
                    <img src={vec3} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleCanned}>Canned food and soups</Button>{' '}
                </div>
                <div>
                    <img src={vec4} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleProduce}>Produce</Button>{' '}
                </div>
                <div>
                    <img src={vec5} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleBakery}>Bakery</Button>{' '}
                </div>
                <div>
                    <img src={vec1} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleDairy}>Dairy and eggs</Button>{' '}
                </div>
                <div>
                    <img src={vec2} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleFrozen}>Frozen</Button>{' '}
                </div>
                <div>
                    <img src={vec3} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleMeat}>Meat</Button>{' '}
                </div>
                <div>
                    <img src={vec4} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleDairy}>Diary and eggs</Button>{' '}
                </div>
                <div>
                    <img src={vec5} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleBakery}>Bakery</Button>{' '}
                </div>
                <div>
                    <img src={vec5} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleProduce}>Produce</Button>{' '}
                </div>
                <div>
                    <img src={vec1} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleDairy}>Dairy and eggs</Button>{' '}
                </div>
                <div>
                    <img src={vec2} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleFrozen}>Frozen</Button>{' '}
                </div>
                <div>
                    <img src={vec3} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleMeat}>Meat</Button>{' '}
                </div>
                <div>
                    <img src={vec4} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleDairy}>Diary and eggs</Button>{' '}
                </div>
                <div>
                    <img src={vec5} className='mobileView' alt='img' />
                    <Button variant="primary" onClick={handleBakery}>Bakery</Button>{' '}
                </div>




            </div>
            <div className='allElements'>
                <Produce />
                <Prepared />
                <Canned />
                <Produce />
                <Bakery />
                <Dairy />
                <Frozen />
                <Meat />
                <Dairy />
                <Bakery />
                <Dairy />
                <Prepared />
                <Canned />
                <Produce />
            </div>
        </div>
    );
}

export default Products