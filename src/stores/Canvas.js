
const defaultValues = {
    url: mainURL,
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
    direction: 'horizontal'
};
export const initialState = (canvasStoreFromStorage == {} ? defaultValues : Object.assign(defaultValues, canvasStoreFromStorage, {url : mainURL}));

