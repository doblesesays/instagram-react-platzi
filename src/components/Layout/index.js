import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles';
import propTypes from 'prop-types';

export const Layout = ({ children, title, subtitle }) => {
    return (
        <>
            <Helmet>
                { title && <title>{title} | Petgram🐶</title> }
                { subtitle && <meta name='description' content={subtitle} /> }
            </Helmet>
            <Div>
                { title && <Title>{title}</Title> }
                { subtitle && <Subtitle>{subtitle}</Subtitle> }
                { children }
            </Div>
        </>
    )
}

Layout.propTypes = {
    children: propTypes.node.isRequired,
    title: propTypes.string,
    subtitle: propTypes.string
}