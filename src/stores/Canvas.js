
const defaultValues = {
    url: "http://www.google.com",
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

export const initialState = localStorage.getItem('canvas') == null ? defaultValues : JSON.parse(localStorage.getItem('canvas'));
