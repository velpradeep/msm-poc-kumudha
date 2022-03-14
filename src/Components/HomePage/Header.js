import React from 'react';
import logo from '../../assets/images/logo.png';
import jumbo2 from '../../assets/images/jumbo2.mp4';
import AMB from '../../assets/images/slider/AMB.png';
import cypruss from '../../assets/images/slider/cypruss.png';
import astroexcavating from '../../assets/images/slider/astroexcavating.png';
import protech from '../../assets/images/slider/protech.jpg';
import BOT from '../../assets/images/slider/BOT.png';
import emp from '../../assets/images/slider/emp.png';
import TW from '../../assets/images/slider/TW.png';
import Insituform from '../../assets/images/slider/Insituform.png';
import DAYSON from '../../assets/images/slider/DAYSON.png';
import cadetta from '../../assets/images/slider/cadetta.png';
import kc from '../../assets/images/slider/kc.png';
import newman from '../../assets/images/slider/newman.png';
import cor from '../../assets/images/card/cor.png';
import mobilephone from '../../assets/images/card/mobilephone.png';
import analytics from '../../assets/images/card/analytics.png';
import compliance from '../../assets/images/card/compliance.png';
import overview from '../../assets/images/overview.mp4';
import imac_outline from '../../assets/images/imac_outline.png';
import hp_bi from '../../assets/images/hp_bi.png';
import SafetyLoopv2 from '../../assets/images/SafetyLoopv2.png';

const HomePage = () => {
    return (
        <div>
            <div className="d-flex justify-content-between m-3">
                <img className="logo-style" src={logo} alt="" />
                <div className="d-flex">
                    <i className="fas fa-phone" aria-hidden="true"></i>
                    <p className="mt-3 me-4">833-444-9876</p>
                    <button type="button" className="btn btn-primary m-auto px-5">Login</button>
                </div>
            </div>
            <div className="hero">
                <video controls>
                    <source src={jumbo2} type="video/mp4" />
                </video>
                <div className="col-md-5 hero-main">
                    <h1>SIMPLIFYING SAFETY</h1>
                    <p>Simplify your health & safety management system by using our ecosystem, custom forms & tools, and monitor in real-time today.</p>
                    <button type="button" className="btn btn-secondary m-auto px-5 me-4">CONTACT US</button>
                    <button type="button" className="btn btn-primary m-auto px-5">LEARN MORE</button>
                </div>
            </div>
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex">
                            <div className="col-md-2">
                                <img className="slider-style" src={cypruss} />
                            </div>
                            <div className="col-md-2">
                                <img className="slider-style" src={astroexcavating} />
                            </div>
                            <div className="col-md-2">
                                <img className="slider-style" src={protech} />
                            </div>
                            <div className="col-md-2">
                                <img className="slider-style" src={BOT} />
                            </div>
                            <div className="col-md-2">
                                <img className="slider-style" src={emp} />
                            </div>
                            <div className="col-md-2">
                                <img className="slider-style" src={TW} />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex">
                            <div className="col-md-2">
                                <img className="slider-style" src={Insituform} />
                            </div>
                            <div className="col-md-2">
                                <img className="slider-style" src={DAYSON} />
                            </div>
                            <div className="col-md-2">
                                <img className="slider-style" src={AMB} />
                            </div>
                            <div className="col-md-2">
                                <img className="slider-style" src={cadetta} />
                            </div>
                            <div className="col-md-2">
                                <img className="slider-style" src={kc} />
                            </div>
                            <div className="col-md-2">
                                <img className="slider-style" src={newman} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="text-center">
                    <h2>
                        SafetyLoop Works With Industry Leaders To Solve All Safety Challenges.
                    </h2>
                    <p>
                        SafetyLoop provides the ability to ‘loop’ all your contractors, subcontractors, vendors and suppliers into your
                        safety eco-system giving you complete and absolute control over your entire health and safety management system.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={cor} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">OH&S Programs</h5>
                                <p className="card-text">COR® is an OHS prequalification requirement for many municipal & provincial government construction projects and without the proper HSMS getting COR® can be very time consuming and complicated.
                                    SafetyLoop is here to help. Contact us today to get on the right Path to COR®.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={mobilephone} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Instant Access From Your Smartphone
                                </h5>
                                <p className="card-text">Everything is just a finger press away. Customize your inspections today, and see it in realtime on your smartphone.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={analytics} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Transparent Reporting, Clearer Safety</h5>
                                <p className="card-text">Our Ecosystem features will improve the working relationships with your
                                    subcontractors by streamlining the OHS onboarding, daily, weekly and monthly legislative compliance requirements and prepare you for the new COR® 2020 (Ontario).</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src={compliance} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Stay Compliant</h5>
                                <p className="card-text">Our Ready to Use OHS software was designed by safety with the sole purpose to manage
                                    your data which allows you the time to focus on what is important within your HSMS. Our cost savings solution will support any complexity within your HSMS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <video muted loop id="myVideo" controls>
                    <source src={overview} type="video/mp4" />
                </video>
            </div>
            <div className="row col-md-12">
                <div className="col-md-6">
                    <img src={imac_outline} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-6 text-center m-auto">
                    <p className="fw-bold">
                        Customizable
                    </p>
                    <div>
                        Our system is completely customizable to match the exact safety management
                        processes of your organization. Through our ALIGN-PLAN- EXECUTE model, WE build
                        and integrate your safety system to mirror the organizations corporate safety culture.
                    </div>
                </div>
            </div>
            <div className="row col-md-12">
                <div className="col-md-6 text-center m-auto">
                    <p className="fw-bold">
                        Custom BI Analytics
                    </p>
                    <div>
                        Work with our team to make sure all your questions are answered,
                        statistics generated in realtime from your custom forms to track any and all your data.
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={hp_bi} className="card-img-top" alt="..." />
                </div>
            </div>
            <div className="col-md-12 hp_ipad">
                <div className="container">
                    <div className="col-md-5 hp_ipad_text">
                        <h1>
                            Designed & Developed by Safety Industry experts
                        </h1>
                        <p>
                            Developed by a team of safety professionals with over 60 years of
                            combined safety management experience, and 20 years in IT development … we made certain SafetyLoop is easy to use and effective for EVERYONE
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <img src={SafetyLoopv2} className="card-img-top" alt="..." />
            </div>
        </div>
    )
}

export default HomePage