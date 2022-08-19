# AUTO GENERATED FILE - DO NOT EDIT

#' @export
qRCode <- function(id=NULL, error=NULL, loading_state=NULL, result=NULL) {
    
    props <- list(id=id, error=error, loading_state=loading_state, result=result)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'QRCode',
        namespace = 'dash_qrcode',
        propNames = c('id', 'error', 'loading_state', 'result'),
        package = 'dashQrcode'
        )

    structure(component, class = c('dash_component', 'list'))
}
