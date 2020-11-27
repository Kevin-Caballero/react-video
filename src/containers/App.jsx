import React, {useState, useEffect} from 'react';
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

const App = () => {
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
    useEffect (()=>{
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    return(
        <div className="App">
            <Header/>
            <Search/>
            {videos.mylist?.length > 0 && (
                <Categories title='My list'>
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            )}
            <Categories title="Trending">
                <Carousel>
                    {videos.trends?.map(item => 
                        <CarouselItem item={item.id}{...item}/>
                    )}
                </Carousel>
            </Categories>
            <Categories title="Originales de React Video">
                <Carousel>
                    {videos.originals?.map(item => 
                        <CarouselItem item={item.id}{...item}/>
                    )}
                    <CarouselItem/>
                </Carousel>
            </Categories>
            <Footer/>
        </div>
    );
}

export default App;