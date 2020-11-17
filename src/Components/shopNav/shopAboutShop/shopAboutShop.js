import React, {Component} from 'react';
import './shopAboutShop.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
    MDBCard,
    MDBCol,
    MDBView,
    MDBRow,
    MDBIcon,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBContainer
} from 'mdbreact';


class shopAboutShop extends Component {

    render() {
        return (
            <div>
                <div className='container'>
                     <h1 className='h1-responsive font-weight-bolder m-0 pt-5 pt-xl-5 pt-lg-5 pt-md-5 pt-sm-5 pt-5 pb-4 pb-xl-5 pb-lg-5 pb-md-5 pb-sm-4'>ПРО МАГАЗИН</h1>
                           <MDBCard className='mb-xl-5 mb-lg-4 mb-md-4 mb-sm-3 mb-2 border-0 z-index-0'>
                                <MDBRow className='m-0 py-xl-5 py-lg-0 py-md-0 py-sm-0 py-0'>
                                       <MDBCol lg='5' className='text-center text-lg-left'>
                                           <MDBContainer className='pt-1'>
                                               <MDBCarousel
                                                   activeItem={1}
                                                   length={3}
                                                   showControls={true}
                                                   showIndicators={false}
                                                   className='z-depth-0 slide'
                                               >
                                                   <MDBCarouselInner>
                                                       <MDBCarouselItem itemId='1'>
                                                           <MDBView>
                                                               <img
                                                                   className='img-fluid w-100'
                                                                   src={require('../../../img/shop/kliss-champu.jpg')}
                                                                   alt=''
                                                               />
                                                           </MDBView>
                                                       </MDBCarouselItem>
                                                       <MDBCarouselItem itemId='2'>
                                                           <MDBView>
                                                               <img
                                                                   className='img-fluid w-100'
                                                                   src={require('../../../img/shop/mossa.jpg')}
                                                                   alt=''
                                                               />
                                                           </MDBView>
                                                       </MDBCarouselItem>
                                                       <MDBCarouselItem itemId='3'>
                                                           <MDBView>
                                                               <img
                                                                   className='img-fluid w-100'
                                                                   src={require('../../../img/salon/hair.jpg')}
                                                                   alt=''
                                                               />
                                                           </MDBView>
                                                       </MDBCarouselItem>
                                                   </MDBCarouselInner>
                                               </MDBCarousel>
                                           </MDBContainer>
                                        </MDBCol>
                                        <MDBCol lg='7'>
                                            <MDBRow
                                                    className='mb-0 about-shop-content pt-xl-3 pt-lg-4 pt-md-5 pt-sm-5 pt-5 border-0 z-index-0'
                                            >
                                                <MDBCol xl='10' md='11' size='10' sm='12'  className='px-sm-4 px-0'>
                                                    <h5 className='font-weight-bold mb-3'>Асортимент</h5>
                                                    <p className='black-text'>
                                                        Інтернет магазин YVONNE пропонує широкий асортимент продукції для догляду за волоссям та аксесуарами. Існує можливість замовити будь-який товар, який не представлений серед асортименту продукції. Магазин співпрацює із такими марками, як:
                                                         <td className='pr-xl-4 pr-lg-4 pr-md-5 pr-sm-4 pr-4 py-xl-2 py-lg-2 py-md-2 py-sm-2 py-3'>
                                                             <tr className='green-text font-weight-bold font-small h-50'>Argan Sublime</tr>
                                                             <tr className='pink-text font-weight-bold font-small h-50'>Hydro Repair</tr>
                                                             <tr className='blue-text font-weight-bold font-small h-50'>Back.bar</tr>
                                                             <tr className='yellow-text font-weight-bold font-small h-50'>Purify</tr>
                                                         </td>
                                                         <td className='pr-xl-4 pr-lg-4 pr-md-5 pr-sm-4 pr-4 py-xl-2 py-lg-2 py-md-2 py-sm-2 py-3'>
                                                             <tr className='green-text font-weight-bold font-small h-75'>HD Life Style</tr>
                                                             <tr className='pink-text font-weight-bold font-small h-75'>Amethyste</tr>
                                                             <tr className='blue-text font-weight-bold font-small h-75'>Bioxil</tr>
                                                             <tr className='yellow-text font-weight-bold font-small h-75'>Amaro</tr>
                                                         </td>
                                                          <td className='pr-xl-4 pr-lg-4 pr-md-5 pr-sm-4 pr-4 py-xl-2 py-lg-2 py-md-2 py-sm-2 py-3'>
                                                             <tr className='green-text font-weight-bold font-small h-75'>Choice</tr>
                                                             <tr className='pink-text font-weight-bold font-small h-75'>Onely</tr>
                                                             <tr className='blue-text font-weight-bold font-small h-75'>K.Liss</tr>
                                                             <tr className='yellow-text font-weight-bold font-small h-75'></tr>
                                                         </td>
                                                         <td className='pr-xl-4 pr-lg-4 pr-md-5 pr-sm-4 pr-1 py-xl-2 py-lg-2 py-md-2 py-sm-2 py-3'>
                                                             <tr className='green-text font-weight-bold font-small h-75'>FarmaVita</tr>
                                                             <tr className='pink-text font-weight-bold font-small h-75'>Tricogen</tr>
                                                             <tr className='blue-text font-weight-bold font-small h-75'>K.Liss</tr>
                                                             <tr className='yellow-text font-weight-bold font-small h-75'></tr>
                                                         </td>
                                                    </p>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow
                                                className='mb-0 about-shop-content pt-xl-4 pt-lg-4 pt-md-5 pt-sm-5 pt-5'
                                            >
                                                <MDBCol xl='10' md='11' size='10' sm='12'  className='px-sm-4 px-0'>
                                                    <h5 className='font-weight-bold mb-3'>Якість та послуги</h5>
                                                    <p className='black-text'>
                                                        Усі товари у магазині сертифіковані;<br/>
                                                        Консультанти оберуть для вас необхідний товар;<br/>
                                                        Відправлення товару відбувається швидко;<br/>
                                                        У магазині постійно діють <span className='red-text font-weight-bold'>АКЦІЇ</span>;<br/>
                                                        Наш магазин діє на основі салону краси ІВОН у місті Києві;<br/>
                                                        Постійно збільшується асортимент продукції.<br/>
                                                        Відправлення товаріз відбувається у будь-яку точкі України;<br/>
                                                        Магазин представляє продукцію Італійських та Українських брендів;<br/>
                                                    </p>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow
                                                    className='mb-0 about-shop-content pt-xl-5 pt-lg-5 pt-md-5 pt-sm-5 pt-5'
                                            >
                                                <MDBCol xl='10' md='11' size='10' sm='12'  className='px-sm-4 px-0'>
                                                    <h5 className='font-weight-bold mb-3'>Замовлення</h5>
                                                    <p className='black-text'>
                                                        Обрати та замовити необхідний товар можливо зробивши онлайн замовлення, зателефонувавши за телефоном та відвідавши магазин за наступними реквізитами:
                                                        <li className="list-unstyled pt-xl-3 pt-3 w-100">
                                                            <a href="#!"><MDBIcon icon="home" className="green-text pr-3"/><span className='black-text w-75 font-small'>м.Київ, вул. Данченко 32</span></a>
                                                        </li>
                                                        <li className="list-unstyled">
                                                            <a href="#!"><span className='w-75 font-small purple-text font-weight-bold'>ЗАТЕЛЕФОНУЙТЕ НАМ!</span></a>
                                                        </li>
                                                        <li className="list-unstyled">
                                                            <a href="#!"><MDBIcon icon="phone-alt" className="green-text pr-3"/><span className='green-text w-75 font-small'>+38 073 500 55 33</span></a>
                                                        </li>
                                                        <li className="list-unstyled">
                                                            <a href="#!"><MDBIcon icon="phone-alt" className="green-text pr-3"/><span className='green-text w-75 font-small'>+38 098 500 55 33</span></a>
                                                        </li>
                                                    </p>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCol>
                               </MDBRow>
                               <div className="mdb-lightbox no-margin mb-lg-5 mb-xl-5 mb-md-5 mb-sm-2 mb-1 mx-2">
                                   <h5 className='font-weight-bold text-center w-100'>Наш салон-магазин YVONNE</h5>
                                   <MDBRow>
                                       <MDBCol md="4">

                                           <figure>
                                               <img
                                                   src={require('./../../../img/salon6.jpg')}
                                                   alt="Gallery"
                                                   className="img-fluid"
                                                   onClick={() =>
                                                       this.setState({ photoIndex: 0, isOpen: true })
                                                   }
                                               />
                                           </figure>
                                       </MDBCol>
                                       <MDBCol md="4">
                                           <figure>
                                               <img
                                                   src={require('./../../../img/salon2.jpg')}
                                                   alt="Gallery"
                                                   className="img-fluid"
                                                   onClick={() =>
                                                       this.setState({ photoIndex: 1, isOpen: true })
                                                   }
                                               />
                                           </figure>
                                       </MDBCol>
                                       <MDBCol md="4">
                                           <figure>
                                               <img
                                                   src={require('./../../../img/salon1.jpg')}
                                                   alt="Gallery"
                                                   className="img-fluid"
                                                   onClick={() =>
                                                       this.setState({ photoIndex: 2, isOpen: true })
                                                   }
                                               />
                                           </figure>
                                       </MDBCol>
                                       <MDBCol md="4">
                                           <figure>
                                               <img
                                                   src={require('./../../../img/salon10.JPG')}
                                                   alt="Gallery"
                                                   className="img-fluid"
                                                   onClick={() =>
                                                       this.setState({ photoIndex: 3, isOpen: true })
                                                   }
                                               />
                                           </figure>
                                       </MDBCol>
                                       <MDBCol md="4">
                                           <figure>
                                               <img
                                                   src={require('./../../../img/salon3.jpg')}
                                                   alt="Gallery"
                                                   className="img-fluid"
                                                   onClick={() =>
                                                       this.setState({ photoIndex: 4, isOpen: true })
                                                   }
                                               />
                                           </figure>
                                       </MDBCol>
                                       <MDBCol md="4">
                                           <figure>
                                               <img
                                                   src={require('./../../../img/salon9.JPG')}
                                                   alt="Gallery"
                                                   className="img-fluid"
                                                   onClick={() =>
                                                       this.setState({ photoIndex: 5, isOpen: true })
                                                   }
                                               />
                                           </figure>
                                       </MDBCol>
                                       <MDBCol md="4">
                                           <figure>
                                               <img
                                                   src={require('./../../../img/salon4.jpg')}
                                                   alt="Gallery"
                                                   className="img-fluid"
                                                   onClick={() =>
                                                       this.setState({ photoIndex: 6, isOpen: true })
                                                   }
                                               />
                                           </figure>
                                       </MDBCol>
                                       <MDBCol md="4">
                                           <figure>
                                               <img
                                                   src={require('./../../../img/salon8.JPG')}
                                                   alt="Gallery"
                                                   className="img-fluid"
                                                   onClick={() =>
                                                       this.setState({ photoIndex: 7, isOpen: true })
                                                   }
                                               />
                                           </figure>
                                       </MDBCol>
                                       <MDBCol md="4">
                                           <figure>
                                               <img
                                                   src={require('./../../../img/salon5.jpg')}
                                                   alt="Gallery"
                                                   className="img-fluid"
                                                   onClick={() =>
                                                       this.setState({ photoIndex: 8, isOpen: true })
                                                   }
                                               />
                                           </figure>
                                       </MDBCol>
                                   </MDBRow>
                               </div>
                    </MDBCard>
                </div>
            </div>
        )
    }
}

export default shopAboutShop;



// import React from 'react';
// import {Component} from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
//
//
// class ShopContacts extends Component {
//     render() {
//         return(
//             <p>hi</p>
//         )
//     }
// }
//
// export default ShopContacts;





















// import React from 'react';
// import {Component} from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
//
//
// class shopAboutShop extends Component {
//     render() {
//         return (
//                 <p>hello</p>
//         )
//     }
//     }
//     export default shopAboutShop;