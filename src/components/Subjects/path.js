import { useParams } from "react-router-dom"

const Path = () => 
{

    const path = useParams()

    return <h1>{path}</h1>

}

export default Path