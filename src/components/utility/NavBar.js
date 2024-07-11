import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CategoryHeader from './CategoryHeader';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FormControl, NavDropdown } from 'react-bootstrap'
import lepgoImage from "../../images/LEPGO.svg"
import IconProduct from "../../images/add_to_photos.svg"
import IconProfile from "../../images/674aaa8a5939fb3fb007e77121fb1581.svg"
import IconChat from "../../images/chat.svg"
import IconShopping from "../../images/bdcb0c3f6d67999723518ef3c2ad5494.svg"
import IconFavourite from "../../images/6f0a18fad030e38fc7194c6a4c334793.svg"
import notifyLepgo from "../../images/notification-new.svg"
import { useDispatch, useSelector } from 'react-redux';
import { ShowFavouriteItem } from '../../redux/action/FavouriteAction';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const NavBar = () => {

    // const [userData, setUserData] = useState('')
    let user = ""

    if (localStorage.getItem('user') != null) {
        user = JSON.parse(localStorage.getItem('user'))
    } else {
        user = ""
    }

    const logOut = () => {
        localStorage.removeItem('user')
        user = "";
        window.location.href = "/"
    }

    // console.log(user.data.user.name);

    //Favourite
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)

    const [FavProducts, setFavProducts] = useState([]);

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(ShowFavouriteItem());
            setLoading(false)
        }
        get();
    }, [])


    const res = useSelector(state => state.FavouriteItemReducer.getFavouriteItems)


    useEffect(() => {
        if (loading === false) {
            if (res.data) {
                // console.log(res.data); 
                if (localStorage.getItem('user')) {
                    setFavProducts(res.data.map(item => item.product_id))
                    // setCount(FavProducts.length)
                }
            }
        }
    }, [loading])
    // let count = FavProducts.length;

    useEffect(() => {
        setCount(FavProducts.length)
    }, [FavProducts.length])

    const [vis, setVis] = useState(false);
    const [d, setD] = useState(false);

    const handleClose = () => setVis(false);
    const handleVis = () => {
        setVis(true)
        setD(false)
    };

    return (
        <div style={{ position: "fixed", zIndex: "25", width: "100%" }}>
            <Navbar expand="lg" className="navbar-top bgNavBar">
                <Container fluid={true}>
                    <Navbar.Brand className='mx-2'>
                        <a href="/">
                            <img src={lepgoImage} className="logo" alt="sfvs" />
                        </a>
                    </Navbar.Brand>
                    <Nav className='mx-1'>
                        <Nav.Link>
                            <div className=''>
                                <img src={notifyLepgo} alt="notify" />
                                <span>الاشعارات</span>
                            </div>
                        </Nav.Link>
                    </Nav>


                    <Navbar.Toggle className="d-lg-none" onClick={handleVis} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse show={d} id="basic-navbar-nav">
                        <FormControl
                            type="search"
                            placeholder="انت بدور علي ايه"
                            className="mx-2 w-75"
                            aria-label="Search"
                        />
                        <Nav>
                            <Nav.Link style={{ borderRight: "3px solid #0000001A", width: "50px", margin: "auto", height:"40px" , padding: "0 5px" }}
                                href=""
                                className="nav-text d-flex justify-content-center align-items-center">
                                <p style={{ color: "black", marginTop: "15px" }}>en</p>
                            </Nav.Link>
                            <Nav.Link style={{ borderRight: "3px solid #0000001A",width:"120px", margin: "auto", height:"40px" , padding: "0 5px" }}
                                href="/exchangeproducts"
                                className="nav-text d-flex justify-content-center align-items-center">
                                <p style={{ color: "black", marginTop: "15px" }}>منتجات التبديل</p>
                            </Nav.Link>

                            <Nav.Link style={{ borderRight: "3px solid #0000001A", width: "200px", margin: "auto", height: "40px", padding: "0 5px" }}
                                href="/addProduct"
                                className="nav-text d-flex align-items-center text-center justify-content-center">
                                <p style={{ color: "black", marginTop: "15px" }}>اضافة منتج للحجز</p>
                                <img style={{ paddingRight: "8px" }} src={IconProduct} className="login-img" alt="sfvs" />
                            </Nav.Link>

                            {
                                user !== "" ? (
                                    <NavDropdown title={user.data.user.name} style={{ borderRight: "3px solid #0000001A", padding: "0 5px" }} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/user/profile">الصفحة الشخصيه</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/" onClick={logOut}>
                                            تسجيل الخروج
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (<Nav.Link style={{ borderRight: "3px solid #0000001A", height: "40px", padding: "0 15px" }}
                                    href="/login"

                                    className="nav-text d-flex align-items-center justify-content-center">
                                    <p style={{ color: "black", marginTop: "15px" }}>
                                        حسابي
                                    </p>
                                    <img style={{ paddingRight: "8px" }} src={IconProfile} className="login-img" alt="sfvs" />
                                </Nav.Link>)
                            }

                            <Nav.Link disabled={true} style={{ borderRight: "3px solid #0000001A", height: "40px", padding: "0 15px" }}
                                href=""
                                className="nav-text d-flex align-items-center justify-content-center">
                                <p style={{ color: "black", marginTop: "15px" }}>الدردشه</p>
                                <img style={{ paddingRight: "8px" }} src={IconChat} className="login-img" alt="sfvs" />
                            </Nav.Link>
                            <Nav.Link style={{ borderRight: "3px solid #0000001A", height: "40px", padding: "0 15px", position: "relative" }}
                                href="/favourite"
                                className="nav-text d-flex align-items-center justify-content-center">
                                <p style={{ color: "black", marginTop: "15px" }}>المفضله</p>
                                <img style={{ paddingRight: "8px" }} src={IconFavourite} className="login-img" alt="sfvs" />
                                <div className="circle">{count}</div>
                            </Nav.Link>
                            <Nav.Link disabled={true} style={{ borderRight: "3px solid #0000001A", height: "40px", padding: "0 15px" }}
                                href="/shoping"
                                className="nav-text d-flex align-items-center justify-content-center">
                                <p style={{ color: "black", marginTop: "15px" }}>العربه</p>
                                <img style={{ paddingRight: "8px" }} src={IconShopping} className="login-img" alt="sfvs" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas show={vis} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Navbar.Brand className='mx-2'>
                            <a href="/">
                                <img src={lepgoImage} className="logo" alt="sfvs" />
                            </a>
                        </Navbar.Brand>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='flex-column'>
                    <FormControl
                        type="search"
                        placeholder="انت بدور علي ايه"
                        className="mx-2 w-100"
                        aria-label="Search"
                    />
                    <div>
                        <div className='d-flex das flex-column' style={{ textAlign: "right"}}>
                            <Nav.Link style={{textAlign:"right"}}
                                href=""
                                className="nav-text">
                                <p style={{ color: "black", marginTop: "15px", textAlign: "right" }}>en</p>
                            </Nav.Link>
                            <Nav.Link style={{ marginBottom:"10px"}}
                                href="/addProduct"
                                className="nav-text">
                                <p style={{ color: "black", marginTop: "15px", }}>اضافة منتج للحجز<img style={{ paddingRight: "8px" }} src={IconProduct} className="login-img" alt="sfvs" /></p>
                            </Nav.Link>
                            <Nav.Link style={{ marginBottom:"10px"}}
                                href="/exchangeproducts"
                                className="nav-text">
                                <p style={{ color: "black", marginTop: "15px", }}> منتجات للتبديل</p>
                            </Nav.Link>

                            {
                                user !== "" ? (
                                    <NavDropdown title={user.data.user.name} style={{ borderRight: "3px solid #0000001A"  ,marginBottom:"10px"}} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/user/profile">الصفحة الشخصيه</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/" onClick={logOut}>
                                            تسجيل الخروج
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (<Nav.Link style={{marginBottom:"10px"}}
                                    href="/login"

                                    className="nav-text">
                                    <p style={{ color: "black", marginTop: "15px" }}>
                                        حسابي
                                        <img style={{ paddingRight: "5px" }} src={IconProfile} className="" alt="sfvs" />
                                    </p>
                                </Nav.Link>)
                            }

                            <Nav.Link disabled={true} style={{height: "40px" , marginBottom:"10px"}}
                                href=""
                                className="nav-text">
                                <p style={{ color: "black", marginTop: "15px" }}> الدردشه <img style={{ paddingRight: "5px" }} src={IconChat} className="login-img" alt="sfvs" /></p>
                            </Nav.Link>
                            <Nav.Link style={{ borderRight: "3px solid #0000001A", height: "40px", position: "relative" ,  marginBottom:"10px"}}
                                href="/favourite"
                                className="nav-text">
                                <p style={{ color: "black", marginTop: "15px" }}>المفضله  <img style={{ paddingRight: "8px" }} src={IconFavourite} className="login-img" alt="sfvs" /></p>
                                <div className="circle1">{count}</div>
                            </Nav.Link>
                            <Nav.Link disabled={true} style={{ borderRight: "3px solid #0000001A", height: "40px" , marginBottom:"10px"}}
                                href="/shoping"
                                className="nav-text">
                                <p style={{ color: "black", marginTop: "15px" }}>العربه<img style={{ paddingRight: "5px" }} src={IconShopping} className="login-img" alt="sfvs" /></p>
                            </Nav.Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <CategoryHeader />

        </div>
    )
}

export default NavBar

