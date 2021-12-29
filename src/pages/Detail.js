import React from 'react';
import { PhotoCardWithQuery } from '../containers/photoCardWithQuery';
import { Layout } from './../components/Layout/index';

export default ({ detailId }) => (
    <Layout title={`Photo ${detailId}`}>
        <PhotoCardWithQuery id={detailId} />
    </Layout>
)