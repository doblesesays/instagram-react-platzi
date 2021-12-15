import React from "react"
import { UserForm } from "../components/UserForm"
import Context from "../Context"

export const NotRegisterUser = () => (
    <Context.Consumer>
        {
            ({ activateAuth }) => {
                return(
                    <>
                        <UserForm title='Signup' onSubmit={activateAuth} />
                        <UserForm title='Login' onSubmit={activateAuth} />
                    </>
                )
                    
            }
        }
    </Context.Consumer>
)