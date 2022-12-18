const initState = {
    lessons: [
        {id: 0, title: 'Topic 1'},
        {id: 1, title: 'Topic 2'},
        {id: 2, title: 'Topic 3'},
        {id: 3, title: 'Topic 4'},
        {id: 4, title: 'Topic 5'},
        {id: 5, title: 'Topic 6'},
    ],
    selectedLessons:[]
};

const dndTopicReducer = (state = initState, action) => {
    switch (action.type) {
        case "DND_TOPIC":
            return action.payload;
        default:
            return state;
    }
}

export default dndTopicReducer;