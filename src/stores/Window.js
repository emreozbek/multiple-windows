
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
    clicked: false,
    url  : "#"
}
export const initialState = windowsStoreFromStorage;

