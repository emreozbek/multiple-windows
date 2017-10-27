const defaultValues = {
    url: mainURL,
    element: '',
    xPosition: 0,
    yPosition: 46,
    padding: 7,
    canvas: {
        width: 0,
        height: 0
    },
    window: {
        width: 0,
        height: 0
    },
    direction: 'vertical',
    scrollRate: {
        x: 0,
        y: 0
    },
    applyScroll: true,
    keepScroll: true
};
let options = {};
if (canvasStoreFromStorage == {}) {
    options = defaultValues;
} else {
    options = Object.assign(defaultValues, canvasStoreFromStorage, {url: mainURL});
    if (!options.keepScroll) {
        options.scrollRate = {
            x: 0,
            y: 0
        }
    }
}

export const initialState = options;


