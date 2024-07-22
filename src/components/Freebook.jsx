import React from 'react'
import list from "../../public/list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Freebook = () => {
    const filterData = list.filter((data) => data.category = "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div>
                <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                    <h1 className='font-bold text-xl pb-2'>Free Offered Course</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas ex minima quia fuga officia exercitationem, nulla reprehenderit fugiat molestiae a eum sunt velit. Dignissimos et consequatur magnam officia nobis?</p>
                </div>


                <div className="slider-container">
                    <Slider {...settings}>
                    {filterData.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook