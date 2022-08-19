import PropTypes from 'prop-types';
import React, { Component, lazy, Suspense } from 'react';
import { QRCode as RealQRCode } from '../LazyLoader';

/**
 * The OncoPrint component is used to view multiple genetic alteration events
 * through an interactive and zoomable heatmap. It is a React/Dash port of the
 * popular oncoPrint() function from the BioConductor R package.
 * Under the hood, the rendering is done using Plotly.js built upon D3.
 * Plotly's interactivity allows the user to bind clicks and hovers to genetic
 * events, allowing the user to create complex bioinformatic apps or workflows
 * that rely on crossfiltering.
 * Read more about the component here:
 * https://github.com/plotly/react-oncoprint
 */
export default class QRCode extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealQRCode {...this.props} />
            </Suspense>
        );
    }
}

QRCode.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique to the component.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change.
     */
    setProps: PropTypes.func,

    /**
     * The resulting code
     */
    result: PropTypes.string,

    /**
     * The error message
     */
    error: PropTypes.string,
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),
};

QRCode.defaultProps = {
    // Layout
    result: null
};

export const defaultProps = QRCode.defaultProps;
export const propTypes = QRCode.propTypes;