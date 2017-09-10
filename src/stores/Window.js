
export const defaultValues = {
    id   : 0,
    size : {
        width: 360,
        height: 480
    },
    position: {
        x: 10,
        y: 10
    },
    reload: false,
    url  : "http://www.emreozbek.net"
}

export const initialState = localStorage.getItem('windows') == null ? [] : JSON.parse(localStorage.getItem('windows'));
/*
export const initialState = [
    {
        id          : 0,
        size        : {
            width: 360,
            height: 240
        },
        position: {
            x: 50,
            y: 100
        },
        reload: false,
        url  : "http://www.emreozbek.net"
    }

];

*/