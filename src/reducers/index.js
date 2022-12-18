import {combineReducers} from "redux";
import courseReducer from "./Courses";
import dndReducer from "./DNDReducer";
import blockReducer from "./BlockReducer";
import builderReducer from "./BuilderReducer";
import dndTopicReducer from "./DndTopicReducer";
import LessonsReducer from "./Lessons";
import TopicsReducer from "./Topics";
import singleCourseReducer from "./SingleCourse";
import singleLessonReducer from "./SingleLesson";
import singleTopicReducer from "./SingleTopic";

const rootReducer = combineReducers({
    courseReducer,
    dndReducer,
    blockReducer,
    builderReducer,
    dndTopicReducer,
    LessonsReducer,
    TopicsReducer,
    singleCourseReducer,
    singleLessonReducer,
    singleTopicReducer,
});

export default rootReducer;