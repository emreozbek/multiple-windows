
export const defaultValues = {
    id   : 0,
    name : 'window',
    size : {
        width: 360,
        height: 480
    },
    position: {
        x: 10,
        y: 10
    },
    old: {
        size : {
            width: 360,
            height: 480
        },
        position: {
            x: 10,
            y: 10
        }
    },
    reload: false,
    fullScreen: false,
    url  : "http://www.emreozbek.net"
}

export const initialState = localStorage.getItem('windows') == null ? [] : JSON.parse(localStorage.getItem('windows'));
