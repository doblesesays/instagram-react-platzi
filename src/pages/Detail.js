import React from 'react';
import { PhotoCardWithQuery } from '../containers/photoCardWithQuery';
import { Layout } from './../components/Layout/index';

export const Detail = ({ detailId }) => (
    <Layout title={`Photo ${detailId}`}>
        <PhotoCardWithQuery id={detailId} />
    </Layout>
)