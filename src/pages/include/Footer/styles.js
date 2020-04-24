import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    min-height: 60px;
    background-color: #202124;

    @media screen and (max-width: 790px) {
        [class*="col-"] {
            /* margin: inherit 15px; */
            padding: 0 !important;
        }
    } 
    
    
    .logo-text {

        @media screen and (max-width: 790px) { 
            .img {
                text-align: center;
            }
        }


        .title {
           
            h1 {
                text-align: center;
                color: #fff;
            }
        }


        .links {
            margin-top: 15px;
            p {
                text-align: center;

                a {
                    font-size: 18px;
                    /* font-weight: bold; */
                    color: #7e1bf0;
                    transition: all 0.2s;

                    &:hover {
                        border-bottom: 2px solid #7e1bf0; 
                    }
                }
                
                color: #fff;
            }
        }

    }

    .contrib {

        margin-bottom: 10px;

        h3 {
            color: #fff;
        }

    }
    
    .copy {
        /* padding-: 30px 0; */
        text-align: center;

        p {
            color: #999;
            padding: 0px 0 30px;
        }
    }
`;

export const Text = styled.div`
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    /* margin-top: 10px; */
    font-size: 15px;
    color: #999;
    font-weight: normal;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`;

export const Section = styled.div`
    padding: ${props => props.type == 0 ? '1rem 4vw 2rem' : '0'} !important;
    margin: 0 auto;
    max-width: 1300px;
    width: 100%;

    display: ${props => props.type == 1 ? 'flex' : ''};
    align-items: ${props => props.type == 1 ? 'center' : ''};
    justify-content: ${props => props.type == 1 ? 'center' : ''};

    

`;

export const Card = styled.div`
    background: #1a1a1d;
    padding: 40px !important;
    /* border: 2px solid #7e1bf0; */
    border-radius: 10px;

    .img {
        display: flex;
        justify-content: center;

        /* overflow: hidden */
        img {
            object-fit: cover;

            border-radius: 360px;
            width: 100%;
            max-width: 200px;
            height: 200px;
            /* max-height: 200px; */
        }
    }

    .desc {
        text-align: center;

        h2 {
            color: #fff;
            margin-top: 5px;
        }

        p {
            color: #999;
        }
    }

    .social {
        margin-top: 25px;
        color: #999;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            transition: all 0.2s;
            font-size: 18px !important;
            margin: 0 10px;


            &:hover {
                color: #fff;
            }
        }
    }
`;



