import PropTypes from 'prop-types';
import React, { Component, lazy, Suspense } from 'react';
import { QrReader } from 'react-qr-reader';

const styles = {
    root: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
    },
    h1: {},
    reader: {
        textAlign: 'center',
        margin: '30px auto',
        maxWidth: 400,
        width: '100%',
    },
    button: {
        backgroundColor: '#f04',
        border: 0,
        borderRadius: 4,
        color: '#fff',
        padding: '5px 10px',
        fontSize: 20,
    },
};

/**
 * A Dash component for playing a variety of URLs, including file paths,
 * YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud,
 * and DailyMotion.
 */
export default class QRCode extends Component {
    constructor(props) {
        super(props);

        this.handleClickScan = this.handleClickScan.bind(this);
        this.handleScan = this.handleScan.bind(this);
        this.handleError = this.handleError.bind(this);
    }


    handleClickScan = () => {
        const { setProps, status } = this.props;
        setProps({
            result: null,
            status: status === 'reader' ? 'idle' : 'reader',
        });

    };

    handleScan = data => {
        const { setProps } = this.props;
        if (data) {
            setProps({
                result: data.text,
                status: 'idle',
            });
        }
    };

    handleError = err => {
        console.error(err);
    };

    render() {
        const {
            result, scanDelay, status
        } = this.props;
        const { id, loading_state } = this.props;
        if (status === 'reader') {
            return (
                <div
                    id={id}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }>
                    <QrReader
                        scanDelay={scanDelay}
                        onError={this.handleError}
                        onResult={this.handleScan}
                        style={{ width: '100%' }}
                    />
                </div>
            );
        }
        return (
            <div
                id={id}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >

            </div>
        );
    }
}


QRCode.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,

    /**
     * Delay for the scanning in ms.
     */
    scanDelay: PropTypes.number,

    /**
     * Prop that will contain the result
     */
    result: PropTypes.string,

    /**
     * Contains the status of the renderer
     */
    status: PropTypes.string,
};

QRCode.defaultProps = {
    scanDelay: 300,
    result: null,
    status: 'idle',
};

// /**
//  * The OncoPrint component is used to view multiple genetic alteration events
//  * through an interactive and zoomable heatmap. It is a React/Dash port of the
//  * popular oncoPrint() function from the BioConductor R package.
//  * Under the hood, the rendering is done using Plotly.js built upon D3.
//  * Plotly's interactivity allows the user to bind clicks and hovers to genetic
//  * events, allowing the user to create complex bioinformatic apps or workflows
//  * that rely on crossfiltering.
//  * Read more about the component here:
//  * https://github.com/plotly/react-oncoprint
//  */
// export default class QRCode extends Component {
//     render() {
//         return (
//             <Suspense fallback={null}>
//                 <RealQRCode {...this.props} />
//             </Suspense>
//         );
//     }
// }

// QRCode.propTypes = {
//     /**
//      * The ID of this component, used to identify dash components
//      * in callbacks. The ID needs to be unique to the component.
//      */
//     id: PropTypes.string,

//     /**
//      * Dash-assigned callback that should be called whenever any of the
//      * properties change.
//      */
//     setProps: PropTypes.func,

//     /**
//      * The resulting code
//      */
//     result: PropTypes.string,

//     /**
//      * The error message
//      */
//     error: PropTypes.string,
//     /**
//      * Object that holds the loading state object coming from dash-renderer
//      */
//     loading_state: PropTypes.shape({
//         /**
//          * Determines if the component is loading or not
//          */
//         is_loading: PropTypes.bool,
//         /**
//          * Holds which property is loading
//          */
//         prop_name: PropTypes.string,
//         /**
//          * Holds the name of the component that is loading
//          */
//         component_name: PropTypes.string,
//     }),
// };

// QRCode.defaultProps = {
//     // Layout
//     result: null
// };

// export const defaultProps = QRCode.defaultProps;
// export const propTypes = QRCode.propTypes;
