import React from "react"
import { Button } from './styles'
import propTypes from 'prop-types';

export const SubmitButton = ({ children, disabled, onClick }) => {
    return <Button onClick={onClick} disabled={disabled}>{ children }</Button>
}

SubmitButton.propTypes = {
    disabled: propTypes.bool,
    onClick: propTypes.func,
    children: propTypes.node.isRequired
}