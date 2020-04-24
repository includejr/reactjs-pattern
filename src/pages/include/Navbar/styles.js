import styled from 'styled-components';


export const NavBar = styled.nav`
    position: fixed;
    width: 100%;   
    /* background-color: rgba(0, 0, 0, 0.6); */
    /* box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.3); */
    z-index: 9999;
    transition: all 1s, background-image 2s;

    &.navbar-dark {
        background-color: #4a148c;
        color: white !important;
    }

    .divider {
        height: 1px;
        background-color: rgba(255,255,255,.1);
    }
    
    
`;

export const NavContent = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1300px;
    padding: 1rem 4vw;

    align-items: center;
    justify-content: space-between;
    /* padding: 50px 100px; */

    /* background-color: rgba(0, 0, 0, 0.6); */
    
    height: 80px;
    color: white;

    .brand {


        .logo {


            /* padding-right: 15px; */
            /* border-right: 1px solid #999; */

            img{
                /* filter: invert(1); */
                width: 160px;
                height: auto;
            }
        }

        h4 {
            padding: 0 15px;
            /* border-right: 1px solid #999; */
        }
    }

    .menu-expand {
        display: none;
        margin-right: 10px;
    }

    

    @media (max-width: 790px) {
        .brand .logo {
            border: none !important;
        }

        .brand h4, .social {
            display: none;
        }

        .menu-expand {
            display: block;
        }
    }
`;

export const NavMenu = styled.div`
    /* display: flex; */
    
    /* height: 36px; */
    /* background-color: #999; */
    /* width: 100%; */
    /* border-top: 1px solid rgba(255, 255, 255, 0.1); */

    button{
        display: none;
    }

    ul {
        display: flex;
        flex-direction: row;
        /* justify-content: space-evenly; */
        align-items: center;
        
        list-style: none;

        li {
            /* letter-spacing: -1px; */
            font-size: 16px;
            font-weight: 700;
            padding: 10px 15px;
            color: white;
            transition: all 0.3s;
            /* text-transform: capitalize; */
            cursor: pointer;

            /* &.active {
                border-bottom: 2px solid #b20710;
            }

            &:not(.dropdown):hover{
                background-color: rgba(255, 255, 255, 0.1);
                border-bottom: 2px solid #b20710;
            } */
            &:hover {
                /* color: red; */
                opacity: 0.8;
            }

            &:first-of-type {
                padding-left: 0px !important; 
            }

            &:last-of-type {
                padding-right: 0px !important; 
            }

            &.route {
                a {
                    font-weight: bold;
                    background: #7e1bf0;
                    color: #fff;
                    border-radius: 10px;
                    padding: 8px 16px;
                    transition: all 0.2s;
                    
                    &:hover {
                        background: #5f04c8;
                    }
                }
                /* background:  */
            }
        }

    }

    @media (max-width: 790px) {
        &{
            height: 100vh;
            width: ${props => props.open == true ? '100%' : '0'}; 
            position: fixed;
            z-index: 9999;
            top: 0;
            right: 0;
            background-color: #272727;
            overflow-x: hidden;
            transition: 0.6s;
        }

        button{
            display: block;
            position: absolute;
            top: 10px;
            right: 20px;

            color: white;
            background: transparent;
            border: none;
            text-decoration: none;


            font-size: 40px;
        }

        ul li{
            margin-top: 20px;
            font-size: 20px;

            &:first-of-type {
                padding-left: 20px !important; 
            }

            &:last-of-type {
                padding-right: 20px !important; 
            }
        }

        ul{
            height: 100%;
            padding: 6rem 0;
            flex-direction: column;
            justify-content: start;
        }
    }
`;

export const Social = styled.div`
    /* position: fixed; */
    margin: 0 auto;
    max-width: 1300px;
    padding:  .7rem 4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .5s ease-in-out;
    /* padding-right: 1px; */
    /* height: 40px; */

    .contato {
        color: white;
        font-size: 12px;
    }

    .social {
        display: flex;
        align-items: center;
        justify-content: space-around;

        svg {
            color: white;
            font-size: 16px !important;
            margin: 0 15px;

            &:last-of-type {
                margin-right: 0px !important; 
            }
        }

        /* a:last-child {
            margin-left: 5px;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 6px 24px;
            font-size: 12px;
            font-weight: bold;
            transition: all 0.3s linear;
        } */

        a:hover {
            /* color: red; */
            opacity: 0.8;
            /* box-shadow: 0 0px 16px 1px gray; */
        }

        
    }
`;