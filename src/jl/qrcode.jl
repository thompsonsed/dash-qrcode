# AUTO GENERATED FILE - DO NOT EDIT

export qrcode

"""
    qrcode(;kwargs...)

A QRCode component.
A Dash component for playing a variety of URLs, including file paths,
YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud,
and DailyMotion.
Keyword arguments:
- `id` (String; optional): The ID used to identify this compnent in Dash callbacks
- `result` (String; optional): Prop that will contain the result
- `scanDelay` (Real; optional): Delay for the scanning in ms.
- `status` (String; optional): Contains the status of the renderer
"""
function qrcode(; kwargs...)
        available_props = Symbol[:id, :result, :scanDelay, :status]
        wild_props = Symbol[]
        return Component("qrcode", "QRCode", "dash_qrcode", available_props, wild_props; kwargs...)
end

