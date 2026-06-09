import useWindowSize from "../../../../hooks/useWindowSize"

export default function Task6(){
    const { height,width } = useWindowSize();
    return <div>
        <h1>Task 6</h1>
        <div>
            <span>Width: {width}</span>
            <span>Height: {height}</span>
        </div>
    </div>
}