import React, { Component } from 'react';
import { omit } from 'ramda';

import { propTypes, defaultProps } from '../components/QRCode.react';
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

export default class QRCode extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        delay: 300,
        result: null,
        status: 'idle',
    };

    handleClickScan = () => {
        console.info("Handling click scan");
        const { status } = this.state;

        this.setState({
            result: null,
            status: status === 'reader' ? 'idle' : 'reader',
        });
    };

    handleScan = data => {
        console.info("Handling scan"); // TODO remove
        if (data) {
            this.setState({
                result: JSON.parse(data),
                status: 'idle',
            });
        }
    };

    handleChange(event) {
        console.info("Handling event");
        const eventObj = JSON.stringify(event);
        this.props.setProps({ eventDatum: eventObj });
    }

    handleError = err => {
        console.error(err);
    };

    render() {
        const { result, status } = this.state;
        const output = {};

        if (status === 'reader') {
            console.info("Status is reader!")  // TODO remove
            console.info(this.state.delay)  // TODO remove
            output.reader = (
                <div style={styles.reader}>
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '100%' }}
                    />
                </div>
            );
        }
        console.info("Reader generated"); // TODO remove
        if (result) {
            console.info("Result found")  // TODO remove
            console.info(result)  // TODO remove
            if (isObject(result)) {
                output.result = (
                    <div>
                        <h3>Hello {result.name}</h3>
                        <p>
                            Your ID is <i>{result.id}</i> and you're an <b>INSIDER</b>
                        </p>
                    </div>
                );
            }
        } else {
            console.info("No result found"); // TODO remove
        }
        return (
            <div style={styles.root}>
                <h1 style={styles.h1}>QRCode with JSON</h1>
                <div style={styles.qrcode}>
                    <button style={styles.button} onClick={this.handleClickScan}>
                        {status === 'reader' ? 'STOP' : 'SCAN'}
                    </button>

                    {/* {output.reader} */}
                    {output.result}
                </div>
            </div>
        );
    }
}

// export default class QRCode extends Component {


// Bind to Dash event handler that puts event back into props
//     handleChange(event) {
//         console.log("Handling event")
//         const eventObj = JSON.stringify(event);
//         this.props.setProps({ eventDatum: eventObj });
//     }

//     render() {
//         console.log("Rendering event");
//         const { id, setProps } = this.props;
//         return (
//             <div id={id}>
//                 <QRApp />
//             </div >
//         );
//     }
// }


QRCode.propTypes = propTypes;
QRCode.defaultProps = defaultProps;
