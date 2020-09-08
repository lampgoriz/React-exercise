const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Andrey',
            img: 'https://image.shutterstock.com/mosaic_250/2936380/640011838/stock-photo-handsome-unshaven-young-dark-skinned-male-laughing-out-loud-at-funny-meme-he-found-on-internet-640011838.jpg'
        },
        {
            id: 2,
            name: 'Kirill',
            img: 'https://image.shutterstock.com/mosaic_250/2936380/613759379/stock-photo-happy-cheerful-young-woman-wearing-her-red-hair-in-bun-rejoicing-at-positive-news-or-birthday-gift-613759379.jpg'
        },
        {
            id: 3,
            name: 'Egor',
            img: 'https://image.shutterstock.com/mosaic_250/2967241/623804987/stock-photo-headshot-portrait-of-happy-ginger-girl-with-freckles-smiling-looking-at-camera-white-background-623804987.jpg'
        },
        {
            id: 4,
            name: 'Sanya',
            img: 'https://img.freepik.com/free-photo/cheerful-fair-haired-young-man-with-braces-grins-has-overjoyed-expression-clenches-teeth-being-glad-pass-all-exams-university-positive-feelings-emotions_176420-13688.jpg?size=626&ext=jpg'
        },
        {
            id: 5,
            name: 'Tohsik',
            img: 'https://thumbs.dreamstime.com/b/confused-african-man-scratching-head-looking-camera-standing-over-gray-background-puzzled-husband-does-not-know-how-130983167.jpg'
        },
        {
            id: 6,
            name: 'Olega',
            img: 'https://image.freepik.com/free-photo/puzzled-african-man-with-beard-shrugging-shoulders-looking-camera_1262-12426.jpg'
        },
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you doing?'},
        {id: 3, message: 'Yo'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        }
        case SEND_MESSAGE: {
            let text = state.newMessageText
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: text}],
                newMessageText: '',
            };
        }
        default :
            return state;
    }
}

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;