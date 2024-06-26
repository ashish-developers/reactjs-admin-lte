import React from 'react';
import Layout from './Layout';
import CarouselSlider from './Carousel';
const images = [
    'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?auto=compress&cs=tinysrgb&w=600'
    ];
class HomeComponent extends React.Component {



  render() {
    return (
        
        <Layout>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                <CarouselSlider images={images} />
                </div>
            </div>
        </div>
         
        </Layout>
        
    );
  }
}

export default HomeComponent;
