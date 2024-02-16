import Part from "./Part"

const Content = (props) => {
    return (
        <>
            <Part parts={props.course.parts[0]} />
            <Part parts={props.course.parts[1]} />
            <Part parts={props.course.parts[2]} />
        </>
    )
}

export default Content