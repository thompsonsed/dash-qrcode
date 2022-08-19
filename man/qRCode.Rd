% Auto-generated: do not edit by hand
\name{qRCode}

\alias{qRCode}

\title{QRCode component}

\description{
The OncoPrint component is used to view multiple genetic alteration events through an interactive and zoomable heatmap. It is a React/Dash port of the popular oncoPrint() function from the BioConductor R package. Under the hood, the rendering is done using Plotly.js built upon D3. Plotly's interactivity allows the user to bind clicks and hovers to genetic events, allowing the user to create complex bioinformatic apps or workflows that rely on crossfiltering. Read more about the component here: https://github.com/plotly/react-oncoprint
}

\usage{
qRCode(id=NULL, error=NULL, loading_state=NULL, result=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique to the component.}

\item{error}{Character. The error message}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{result}{Character. The resulting code}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

