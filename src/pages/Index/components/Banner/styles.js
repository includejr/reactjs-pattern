import styled from 'styled-components';
import Img from '../../../../assets/img/banner.jpg';

export const BannerImg = styled.div`
    width: 100%;
    height: 400px;
    
    background-image: linear-gradient(#fff, #222), url(${Img});
    

	background-blend-mode: multiply;
	/* filter: blur(1px); */
	/* Set a specific height */
	/* min-height: 100vh;  */
	

	/* Create the parallax scrolling effect */
	/* background-attachment: fixed; */
	background-position: center;
	background-repeat: no-repeat;
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .brasil {
        font-weight: 300;
        margin-top: 30px;
        text-align: center;
        letter-spacing: 1px;
        color: #CED2D9 !important;
        font-size: 1.2rem;
    }

    .text {
        /* position: absolute;
        left: 100px;
        top: 260px; */
        /* max-width: 700px; */
        text-align: center;
        padding: 60px 4vw;
        color: white;

        h1{
            /* margin-top: 30px; */
            /* text-align: justify; */
            font-size: 52px;
            font-weight: normal !important;
            letter-spacing: 1px;
            font-weight: 700 !important;
            color: #fff;

        }


        @media screen and (max-width: 790px) {
            h1{
                font-size: 36px;
            }  
        } 
    }

    .cases {
        padding: 0 4vw;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .confirmed, .dealths, .recovery{
            display: flex;
            flex-direction: row;
            align-items: center;

            svg {
                color: #7d40e7;
                font-size: 44px;
            }

            &.pulsate {
                -webkit-animation: pulsate 0.6s ease-out;
                -webkit-animation-iteration-count: infinite; 
                opacity: 0.5;
            }

            @-webkit-keyframes pulsate {
                0% { 
                    opacity: 0.5;
                }
                50% { 
                    opacity: 1.0;
                }
                100% { 
                    opacity: 0.5;
                }
            }
        }
        
        .confirmed .text, .dealths .text, .recovery .text{
            
            
            h1 {
                text-align: left;
                color: #7d40e7;
                font-size: 22px;
            }

            padding: 10px;

            p {
                /* text-align: left */
                margin-top: 0px; 
                color: #fff;
            }
        }
    }

`;