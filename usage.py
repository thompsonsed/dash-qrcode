import dash_qrcode
import dash
from dash.dependencies import Input, Output
from dash import html

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.P("Testing"),
        html.Br(),
        dash_qrcode.QRCode(id="test"),
        html.Div(id="output"),
    ]
)


# @app.callback(Output('output', 'children'), [Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)


if __name__ == "__main__":
    app.run_server(debug=True)
