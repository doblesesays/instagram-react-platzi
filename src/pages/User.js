import React, { useContext } from "react"
import { Context } from "../Context"
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from "../components/Layout"

export default () => {
    const { removeAuth } = useContext(Context)
    return <Layout title='Users profile' subtitle='Here you can logout' >
        <h1>User</h1>
        <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
    </Layout>
}