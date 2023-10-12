const { useEffect } = require("react")

function ReactUseEffect() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    useEffect( () => {
        console.log("this is useeffect")
        axios.get("")
        .then((response) => {
            console.log(response.data)
            setData(response.data)
        })
        .catch((err) => console.log(err))

    }, [])
    return (<>
    <h3>count : {count}</h3>
    <button onClick={() =>{
        setCount(count+1)
     }}>+1</button>
     {data.map((item) => (
        <h3 key={item.id}>{item.name}</h3>
     ))}
    </>

    )
}