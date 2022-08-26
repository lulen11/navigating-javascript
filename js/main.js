
function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(150, 75, 50, 0, Math.PI * 2, true); // face
        ctx.moveTo(110, 75);
        ctx.arc(150, 75, 40, 0, Math.PI, false); // mouth
        ctx.moveTo(140, 65);
        ctx.arc(135, 65, 5, 0, Math.PI * 5, true); // left eye
        ctx.moveTo(170, 65);
        ctx.arc(165, 65, 5, 0, Math.PI * 5, true); // right eye
        ctx.stroke();
    }
}


function inspireYou() {
    fetch("https://api.goprogram.ai/inspiration")
    .then((response) => response.json())
    .then((data) => document.querySelector(".quote").innerHTML = data.quote);
}


class course {
    constructor(title,language,level,description){
        this.title = title;
        this.language = language;
        this.level = level;
        this.description = description;
    }
}

let courseNode = new course('Building APIs with Node.JS', 'Node', '3', 'In this course, you will be learning to build APIs with Node');
let courseReact = new course('Building Apps with React.JS', 'React', '3', 'This course, you will learn all about Apps and React');

let buttons = document.querySelector(".btn");
let hideAndShow = document.querySelector(".hideAndShow");

function showCourseQuery() {
    // console.log("function is running");
    hideAndShow.classList.toggle("hideAndShow");
    inspireYou();

    document.querySelector(".next-courses").classList.remove("next-courses");

    let courseNodeClick = document.querySelector(".btn.node");
    let courseReactClick = document.querySelector(".btn.react");

    courseNodeClick.addEventListener("click", nextCourseNode);
    courseReactClick.addEventListener("click", nextCourseReact);

    function nextCourseNode(){
        document.getElementById("course").innerHTML = courseNode.title;
        document.getElementById("course-details").innerHTML = courseNode.description;

        draw();
    }
    function nextCourseReact(){
        document.getElementById("course").innerHTML = courseReact.title;
        document.getElementById("course-details").innerHTML = courseReact.description;
        
        draw();
    }
}

buttons.addEventListener("click", showCourseQuery);