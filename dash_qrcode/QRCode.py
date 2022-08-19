# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class QRCode(Component):
    """A QRCode component.
The OncoPrint component is used to view multiple genetic alteration events
through an interactive and zoomable heatmap. It is a React/Dash port of the
popular oncoPrint() function from the BioConductor R package.
Under the hood, the rendering is done using Plotly.js built upon D3.
Plotly's interactivity allows the user to bind clicks and hovers to genetic
events, allowing the user to create complex bioinformatic apps or workflows
that rely on crossfiltering.
Read more about the component here:
https://github.com/plotly/react-oncoprint

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique to the component.

- error (string; optional):
    The error message.

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- result (string; optional):
    The resulting code."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_qrcode'
    _type = 'QRCode'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, result=Component.UNDEFINED, error=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'error', 'loading_state', 'result']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'error', 'loading_state', 'result']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(QRCode, self).__init__(**args)
