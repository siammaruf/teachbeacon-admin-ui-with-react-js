import React, {useEffect, useRef, useState} from 'react';
import {POST_PER_PAGE} from "../action/ActionTypes";
import {Pagination} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearTopicData} from "../action/TopicActions";

const PaginationComponent = ({navigateFor, postCount, currentPage}) => {
    const lEllipsisRef = useRef(null);
    const fEllipsisRef = useRef(null);
    const navigate = useNavigate();
    const [getItems, setItems] = useState([]);
    const [pageLimit, setLimit] = useState({start: 2, end: 5});
    const dispatch = useDispatch()

    const pageCount = Math.ceil(postCount / POST_PER_PAGE);

    const routPageTo = (e) => {
        let handler = e.currentTarget;
        let parent = handler.parentElement;
        let pageNumber = parseInt(handler.getAttribute("data-page-number"));

        dispatch(clearTopicData());

        if (!parent.classList.contains("active")) {
            if (parent.classList.contains('page-prev')) {
                if (pageNumber !== 1) {
                    navigate(`/${navigateFor}?page=${pageNumber - 1}`);
                }
            } else if (parent.classList.contains('page-next')) {
                if (pageNumber !== pageCount) {
                    navigate(`/${navigateFor}?page=${pageNumber + 1}`);
                }
            } else {
                navigate(`/${navigateFor}?page=${pageNumber}`);
            }
        }
    }

    useEffect(() => {
        let itemsArr = [];
        for (let number = pageLimit.start; number <= pageLimit.end; number++) {
            itemsArr.push(
                <Pagination.Item data-page-number={number} onClick={routPageTo} key={number}
                                 active={number === parseInt(currentPage)}>{number}
                </Pagination.Item>,
            );
        }
        setItems(itemsArr);

    }, [setItems, currentPage, pageCount, pageLimit, setLimit]);

    useEffect(() => {

        if (pageCount > 5) {

            if (parseInt(currentPage) >= 5 && parseInt(currentPage) <= (pageCount - 4)) {
                setLimit({
                    start: parseInt(currentPage),
                    end: parseInt(currentPage) + 3,
                });
                lEllipsisRef.current.style.display = 'block';
                fEllipsisRef.current.style.display = 'block';
            }else if(parseInt(currentPage) >= (pageCount - 5)) {
                setLimit({
                    start: pageCount - 4,
                    end: pageCount -1,
                });
                lEllipsisRef.current.style.display = 'none';
                fEllipsisRef.current.style.display = 'block';
            }

        }

        if (parseInt(currentPage) < 5 && pageCount > 5){
            setLimit({
                start: 2,
                end: 5,
            });

            fEllipsisRef.current.style.display = 'none';
            lEllipsisRef.current.style.display = 'block';
        }else if(parseInt(currentPage) < 5){
            setLimit({
                start: 2,
                end: pageCount - 1,
            });
        }

    }, [setLimit, currentPage, pageCount]);

    const fEllipsis = () =>{
        setLimit({
            start: 2,
            end: 5,
        });

        fEllipsisRef.current.style.display = 'none';
        lEllipsisRef.current.style.display = 'block';
    }

    const lEllipsis = () =>{
        setLimit({
            start: pageCount - 4,
            end: pageCount -1,
        });
        fEllipsisRef.current.style.display = 'block';
        lEllipsisRef.current.style.display = 'none';
    }


    if (postCount <= POST_PER_PAGE) {
        return;
    }

    return (
        <div className="pagination-holder d-flex justify-content-center mb-5 mt-3">
            <Pagination>
                <Pagination.First data-page-number={1} onClick={routPageTo}/>
                <Pagination.Prev data-page-number={currentPage} onClick={routPageTo} className="page-prev"/>

                <Pagination.Item data-page-number={1} active={parseInt(currentPage) === 1} onClick={routPageTo}>{1}</Pagination.Item>
                <Pagination.Ellipsis onClick={fEllipsis} ref={fEllipsisRef} style={{display:"none"}}/>
                {getItems}
                <Pagination.Ellipsis onClick={lEllipsis} ref={lEllipsisRef} style={{display:"none"}}/>
                <Pagination.Item data-page-number={pageCount} active={pageCount === parseInt(currentPage)} onClick={routPageTo}>{pageCount}</Pagination.Item>

                <Pagination.Next data-page-number={currentPage} onClick={routPageTo} className="page-next"/>
                <Pagination.Last data-page-number={pageCount} onClick={routPageTo}/>
            </Pagination>
        </div>
    );
};

export default PaginationComponent;