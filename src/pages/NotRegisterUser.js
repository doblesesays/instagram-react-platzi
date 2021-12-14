import React from "react"
import { UserForm } from "../components/UserForm"
import Context from "../Context"

export const NotRegisterUser = () => (
    <Context.Consumer>
        {
            ({ activateAuth }) => {
                return <UserForm onSubmit={activateAuth} />
            }
        }
    </Context.Consumer>
)