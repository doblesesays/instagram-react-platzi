import React from "react"
import { UserForm } from "../components/UserForm"
import Context from "../Context"
import { RegisterMutation } from './../containers/RegisterMutation';

export const NotRegisterUser = () => (
    <Context.Consumer>
        {
            ({ activateAuth }) => {
                return(
                    <>
                        <RegisterMutation>
                        {
                            (register, { data, loading, error }) => {
                                const onSubmit = ({ email, password }) => {
                                    const input = { email, password }
                                    const variables = { input }
                                    register({ variables }).then(activateAuth)
                                }
                                const errorMsg = error && 'The user already exist or there is been a problem'
                                return <UserForm disabled={loading} error={errorMsg} title='Signup' onSubmit={onSubmit} />
                            }
                        }
                        </RegisterMutation>
                        <UserForm title='Login' onSubmit={activateAuth} />
                    </>
                )
                    
            }
        }
    </Context.Consumer>
)