export const hideMainSidebar = (dnd) => {
    const mainSidebar = document.getElementById("main-sidebar");
    const innerSidebar = document.getElementById("inner-sidebar");

    if ( dnd.current !== null ){
        dnd.current.classList.add("hide-navbar");
    }

    // innerSidebar.nextSibling.style.display = 'none';
    //
    // if (innerSidebar.classList.contains('hide-navbar')) {
    //     innerSidebar.classList.remove('hide-navbar');
    //     mainSidebar.classList.add("hide-navbar");
    // } else {
    //     mainSidebar.classList.remove("hide-navbar");
    //     innerSidebar.classList.add('hide-navbar');
    // }

        innerSidebar.classList.remove('hide-navbar');
        mainSidebar.classList.add("hide-navbar");
}

export const shoeDndSidebar = (dnd) => {
    const innerSidebar = document.getElementById("inner-sidebar");
    const mainSidebar = document.getElementById("main-sidebar");
    const allBlcTitle = document.querySelectorAll('.item-blc-title');

    allBlcTitle.forEach(element => {
        element.classList.remove('active');
    });

    innerSidebar.nextSibling.style.display = 'none';
    innerSidebar.classList.add("hide-navbar");
    mainSidebar.classList.add("hide-navbar");
    dnd.current.classList.remove("hide-navbar");
}

export const closeSidebar = (dnd) => {
    const mainSidebar = document.getElementById("main-sidebar");
    mainSidebar.classList.remove("hide-navbar");
    dnd.current.classList.add("hide-navbar");
}

export const id2List = {
    droppable: 'selectedLessons',
    droppable1: 'lessons'
};

export const getList = (id, state) => {
    return state[id2List[id]];
}

export const dndMove = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);

    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const dndDeleteSelectedItem = (id, state) => {

    let sLessons = state.selectedLessons;
    let getLessons = state.lessons;

    const findRow = sLessons.find(item => item.id === id);
    const findIndex = sLessons.findIndex(item => item.id === id);

    let cLessons = [...getLessons,findRow];
    sLessons.splice(findIndex,1);

    return {
        lessons: cLessons,
        selectedLessons: sLessons,
    }
}
