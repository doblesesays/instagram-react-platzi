import React from "react"
import { Layout } from "../components/Layout"
import { FavsWithQuery } from "../containers/getFavorites"

export default () => (
    <Layout title='Your favorite photos' subtitle='You can see your favorite photos'>
        <FavsWithQuery />
    </Layout>
)