import ports from "../service/ports.mock.json";

export default function Card() {
    return (
        <div>
            <h1>
                {ports[0].port}
            </h1>
            <p>
                {ports[0].description}
            </p>
        </div>
    )
}