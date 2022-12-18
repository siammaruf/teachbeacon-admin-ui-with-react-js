import React, {useEffect} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {retrieveTopic} from "../../action/TopicActions";
import PaginationComponent from "../Pagination";
import LoadingTopBar from "../LoadingTopBar";
import {clearStateData} from "../../action/LessonActions";

const Topics = () => {
    const topicState = useSelector((state) => state.TopicsReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const getPageNumber = searchParam.get('page') || 1;

    useEffect(()=>{
        dispatch(retrieveTopic(parseInt(getPageNumber)));
    },[dispatch,getPageNumber])

    const navEdit = (id) => {
        navigate("/topics/" + id);
        dispatch(clearStateData())
    }
    const initCourseImg = 'https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png';

    return (
        <>
            <LoadingTopBar isLoading={topicState.isLoading}/>
            <header className="page-title-area mt-4 mb-3">
                <h1>Topics</h1>
            </header>
            <section className="item-filter-area mb-3 align-self-baseline">
                <Row>
                    <Col className="col-lg-6 col-sm-12">
                        <Form.Group className="w-75">
                            <Form.Control type="text" placeholder="Search Topic"/>
                        </Form.Group>
                    </Col>
                    <Col className="d-lg-flex mt-lg-0 mt-sm-2 justify-content-end col-lg-6 col-sm-12">
                        <Button onClick={() => {
                            navigate("/topics/new")
                        }}>Add Topic</Button>
                    </Col>
                </Row>
            </section>
            <section className="page-content">
                <Row>
                    {topicState.topics &&
                        topicState.topics.map((topic) => {
                            return (
                                <Col key={topic.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <Card>
                                        <div className="card-img-holder">
                                            <Card.Img variant="top" src={ topic.featured_media === 0 ? initCourseImg : topic.featured_media }/>
                                        </div>
                                        <Card.Body>
                                            <Card.Title dangerouslySetInnerHTML={{__html:topic.title.rendered}}></Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button onClick={() => navEdit(topic.id)}>Edit</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <PaginationComponent navigateFor="topics" postCount={parseInt(topicState.postCount)} currentPage={getPageNumber}/>
            </section>
        </>
    );
};

export default Topics;