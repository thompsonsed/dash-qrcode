# AUTO GENERATED FILE - DO NOT EDIT

export qrcode

"""
    qrcode(;kwargs...)

A QRCode component.
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
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique to the component.
- `error` (String; optional): The error message
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `result` (String; optional): The resulting code
"""
function qrcode(; kwargs...)
        available_props = Symbol[:id, :error, :loading_state, :result]
        wild_props = Symbol[]
        return Component("qrcode", "QRCode", "dash_qrcode", available_props, wild_props; kwargs...)
end

