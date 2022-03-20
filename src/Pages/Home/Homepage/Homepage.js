import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeContactUs from '../HomeContactUs/HomeContactUs';
import HomeDoctors from '../HomeDoctors/HomeDoctors';
import HomeServices from '../HomeServices/HomeServices';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <HomeBanner></HomeBanner>
            <HomeServices></HomeServices>
            <AboutUs></AboutUs>
            <HomeDoctors></HomeDoctors>
            <HomeContactUs></HomeContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
