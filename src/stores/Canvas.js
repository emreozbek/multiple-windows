
const defaultValues = {
    url: window.mainURL,
    element: '',
    xPosition: 0,
    yPosition: 46,
    padding: 7,
    canvas:{
        width: 0,
        height: 0
    },
    window: {
        width: 0,
        height: 0
    },
};

export const initialState = localStorage.getItem('canvas') == null ? defaultValues : Object.assign(JSON.parse(localStorage.getItem('canvas')), {url : window.mainURL});
