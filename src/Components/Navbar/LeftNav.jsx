import React from 'react';
import styled from 'styled-components';

const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        color: #fff;
    }
`;

const LeftNav = ({ open }) => {
    return (
        <UL open={open}>
            <li>The John</li>
            <li>Mikey</li>
            <li>Susan</li>
            <li>Tay Boy</li>
            <li>Jason</li>
        </UL>
    )
}

export default LeftNav;