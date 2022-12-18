import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {clearStateData, retrieveLesson} from "../../action/LessonActions";
import PaginationComponent from "../Pagination";
import LoadingTopBar from "../LoadingTopBar";

const Lessons = () => {
    const lessonState = useSelector((state) => state.LessonsReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const getPageNumber = searchParam.get('page') || 1;

    useEffect(()=>{
        dispatch(retrieveLesson(parseInt(getPageNumber)))
    },[dispatch,getPageNumber])

    const navEdit = (id) =>{
        navigate("/lessons/"+id);
        dispatch(clearStateData());
    }
    const initCourseImg = 'https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png';

    return (
        <>
            <LoadingTopBar isLoading={lessonState.isLoading}/>
            <header className="page-title-area mt-4 mb-3">
                <h1>Lessons</h1>
            </header>
            <section className="item-filter-area mb-3 align-self-baseline">
                <Row>
                    <Col className="col-lg-6 col-sm-12">
                        <Form.Group className="w-75">
                            <Form.Control type="text" placeholder="Search Lesson"/>
                        </Form.Group>
                    </Col>
                    <Col className="d-lg-flex mt-lg-0 mt-sm-2 justify-content-end col-lg-6 col-sm-12">
                        <Button onClick={()=>{navigate("/lessons/new")}}>Add Lesson</Button>
                    </Col>
                </Row>
            </section>
            <section className="page-content">
                <Row>
                    {lessonState.lessons &&
                        lessonState.lessons.map((lesson) => {
                            return (
                                <Col key={lesson.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <Card>
                                        <div className="card-img-holder">
                                            <Card.Img variant="top" src={ lesson.featured_media === 0 ? initCourseImg : lesson.featured_media }/>
                                        </div>
                                        <Card.Body>
                                            <Card.Title dangerouslySetInnerHTML={{__html:lesson.title.rendered}}></Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button onClick={()=>navEdit(lesson.id)}>Edit</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <PaginationComponent navigateFor="lessons" postCount={parseInt(lessonState.postCount)} currentPage={getPageNumber}/>
            </section>
        </>
    );
};

export default Lessons;