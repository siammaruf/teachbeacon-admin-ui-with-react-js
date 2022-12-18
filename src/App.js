import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Common from "./components/Common";
import CoursesIndex from "./components/courses";
import Courses from "./components/courses/Courses";
import Home from "./components/Home";
import EditCourse from "./components/courses/EditCourse";
import NewCourse from "./components/courses/NewCourse";
import LessonIndex from "./components/lessons";
import Lessons from "./components/lessons/Lessons";
import NewLesson from "./components/lessons/NewLesson";
import EditLesson from "./components/lessons/EditLesson";
import TopicIndex from "./components/topics";
import Topics from "./components/topics/Topics";
import EditTopic from "./components/topics/EditTopic";
import NewTopic from "./components/topics/NewTopic";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Common/>}>
            <Route index element={<Home/>} />
            <Route path="courses" element={<CoursesIndex/>}>
                <Route index element={<Courses/>} />
                <Route path=":id" element={<EditCourse/>}/>
                <Route path="new" element={<NewCourse/>} />
            </Route>
            <Route path="lessons" element={<LessonIndex/>}>
                <Route index element={<Lessons/>} />
                <Route path=":id" element={<EditLesson/>}/>
                <Route path="new" element={<NewLesson/>} />
            </Route>
            <Route path="topics" element={<TopicIndex/>}>
                <Route index element={<Topics/>} />
                <Route path=":id" element={<EditTopic/>}/>
                <Route path="new" element={<NewTopic/>} />
            </Route>
        </Route>
      </Routes>
    </Router>
  )
}
export default App;
