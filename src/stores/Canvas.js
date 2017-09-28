
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

export const initialState = myCanvas == {} ? defaultValues : Object.assign(defaultValues, {url : mainURL});
