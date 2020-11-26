import React from 'react';
import {Component} from 'react';
import { MDBContainer, MDBNav, MDBNavItem, MDBNavLink, MDBTabPane, MDBTabContent, MDBCol, MDBRow} from 'mdbreact';

import './shopAccount.css'


class ShopAccount extends Component {

    state = {
        items: {
            content: '1',
            contentCard: '1',
        }

    }

    togglePills = (type, tab) => e => {
        e.preventDefault();
        if (this.state.items[type] !== tab) {
            let items = { ...this.state.items };
            items[type] = tab;
            this.setState({
                items
            });
        }
    };


    render() {
        return (
            <MDBContainer className='pb-5'>
                <h1 className='h1-responsive font-weight-bolder m-0 pt-2 py-xl-5 py-lg-5 py-md-5 py-sm-5 py-5'>Форма замовлення</h1>
                <MDBRow className='p-0 w-100 m-0'>
                    <MDBCol md="12" className='p-0 w-100'>
                        <MDBNav
                            pills
                            className="nav-justified pills-rounded pills-purple-gradient"
                        >
                            <MDBNavItem>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={this.state.items["content"] === "1"}
                                    onClick={this.togglePills("content", "1")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 nav-links'
                                >
                                    ПРОФІЛЬ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={this.state.items["content"] === "2"}
                                    onClick={this.togglePills("content", "2")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 nav-links'
                                >
                                    ЗАМОВЛЕННЯ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={this.state.items["content"] === "3"}
                                    onClick={this.togglePills("content", "3")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 nav-links'
                                >
                                    СПОДОБАЛОСЬ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    link
                                    to="#"
                                    active={this.state.items["content"] === "4"}
                                    onClick={this.togglePills("content", "4")}
                                    className='font-weight-bold black-text rgba-grey-light p-3 nav-links'
                                >
                                    ПЕРЕГЛЯНУТІ
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={this.state.items["content"]}>
                            <MDBTabPane tabId="1" className='p-2'>
                                <div className='py-3'>
                                    <h4 className='py-3'>Особисті дані</h4>
                                    <div col='12' className='d-inline-flex w-100 info-pain'>
                                        <div className='p-3 col-3'>
                                            <p>Ім'я</p>
                                            <p>Яна</p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Прізвище</p>
                                            <p>Кеух</p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>По-батькові</p>
                                            <p>Яна</p>
                                        </div>
                                        <div>
                                            <button className='bg-transparent border-0 m-2'>Редагувати</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <h4 className='py-3'>Контактні дані</h4>
                                    <div col='12' className='d-inline-flex  w-100 info-pain'>
                                        <div className='p-3 col-3'>
                                            <p>Телефон</p>
                                            <p>Яна</p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Додатковий телефон</p>
                                            <p>Кеух</p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Email</p>
                                            <p>Яна</p>
                                        </div>
                                        <div>
                                            <button className='bg-transparent border-0 m-2'>Редагувати</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <h4 className='py-3'>Адреса доставки</h4>
                                    <div col='12' className='d-inline-flex  w-100 info-pain'>
                                        <div className='p-3 col-3'>
                                            <p>Місто</p>
                                            <p>Яна</p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Вулиця</p>
                                            <p>Яна</p>
                                        </div>
                                        <div className='p-3 col-3'>
                                            <p>Будинок</p>
                                            <p>Яна</p>
                                        </div>
                                        <div>
                                            <button className='bg-transparent border-0 m-2'>Редагувати</button>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="2" className='p-2'>
                                        <div className='py-3'>
                                            <h4 className='py-3'>Замовлені товари</h4>
                                            <div col='12' className='d-inline-flex w-100 info-pain'>
                                                <div className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 w-responsive p-3">
                                                    <MDBCol className='col-2 p-0 m-0'>
                                                        <img src="./01_color_shampoo.jpg" className="img-fluid w-100 h-25" alt="Responsive" />
                                                    </MDBCol>
                                                    <MDBCol className='mx-1 col-5 col-sm-5 col-md-6 col-lg-6 col-xl-5 p-1 py-1 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                                        <p className='order-item p-2'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                                    </MDBCol>
                                                    <MDBCol className='col-1 p-1 py-3 mx-0'>
                                                        <form>
                                                            <input className='input-q' type='number' min='1' value='1'></input>
                                                        </form>
                                                    </MDBCol>
                                                    <MDBCol className='col-2 px-3 py-1 mx-0'>
                                                        <p className='px-lg-2 px-xl-2 px-md-2 px-sm-2 px-2 py-3'>1500<span>грн</span></p>
                                                    </MDBCol>
                                                    <MDBCol className='col-1 p-1 py-2'>
                                                        <button type="button" className="btn btn-m m-0 text-center bg-transparent border-0 z-depth-0">
                                                            <i className="fas fa-times mr-2"></i>
                                                        </button>
                                                    </MDBCol>
                                                </div>
                                            </div>
                                        </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="3" className='p-2'>
                                <div className='py-3'>
                                    <h4 className='py-3'>Товари, що сподобались</h4>
                                    <div col='12' className='d-inline-flex w-100 info-pain'>
                                        <div className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 w-responsive p-3">
                                            <MDBCol className='col-2 p-0 m-0'>
                                                <img src="./01_color_shampoo.jpg" className="img-fluid w-100 h-25" alt="Responsive" />
                                            </MDBCol>
                                            <MDBCol className='mx-1 col-5 col-sm-5 col-md-6 col-lg-6 col-xl-5 p-1 py-1 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                                <p className='order-item p-2'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                            </MDBCol>
                                            <MDBCol className='col-1 p-1 py-3 mx-0'>
                                                <form>
                                                    <input className='input-q' type='number' min='1' value='1'></input>
                                                </form>
                                            </MDBCol>
                                            <MDBCol className='col-2 px-3 py-1 mx-0'>
                                                <p className='px-lg-2 px-xl-2 px-md-2 px-sm-2 px-2 py-3'>1500<span>грн</span></p>
                                            </MDBCol>
                                            <MDBCol className='col-1 p-1 py-2'>
                                                <button type="button" className="btn btn-m m-0 text-center bg-transparent border-0 z-depth-0">
                                                    <i className="fas fa-times mr-2"></i>
                                                </button>
                                            </MDBCol>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="4" className='p-2'>
                                <div className='py-3'>
                                    <h4 className='py-3'>Переглянуті товари</h4>
                                    <div col='12' className='d-inline-flex w-100 info-pain'>
                                        <div className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-4 w-responsive p-3">
                                            <MDBCol className='col-2 p-0 m-0'>
                                                <img src="./01_color_shampoo.jpg" className="img-fluid w-100 h-25" alt="Responsive" />
                                            </MDBCol>
                                            <MDBCol className='mx-1 col-5 col-sm-5 col-md-6 col-lg-6 col-xl-5 p-1 py-1 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-3 px-1'>
                                                <p className='order-item p-2'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                            </MDBCol>
                                            <MDBCol className='col-1 p-1 py-3 mx-0'>
                                                <form>
                                                    <input className='input-q' type='number' min='1' value='1'></input>
                                                </form>
                                            </MDBCol>
                                            <MDBCol className='col-2 px-3 py-1 mx-0'>
                                                <p className='px-lg-2 px-xl-2 px-md-2 px-sm-2 px-2 py-3'>1500<span>грн</span></p>
                                            </MDBCol>
                                            <MDBCol className='col-1 p-1 py-2'>
                                                <button type="button" className="btn btn-m m-0 text-center bg-transparent border-0 z-depth-0">
                                                    <i className="fas fa-times mr-2"></i>
                                                </button>
                                            </MDBCol>
                                        </div>
                                    </div>
                                </div>
                            </MDBTabPane>
                        </MDBTabContent>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default ShopAccount;