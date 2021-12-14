import React from "react"
import Context from "../Context"

export const NotRegisterUser = () => (
    <Context.Consumer>
        {
            ({ activateAuth }) => {
                return(
                    <form onSubmit={activateAuth}>
                        <button>Loggin</button>
                    </form>
                )
            }
        }
    </Context.Consumer>
)