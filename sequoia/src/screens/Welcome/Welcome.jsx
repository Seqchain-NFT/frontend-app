import './Welcome.scss'
import ground from './ground.png'


const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcome__canvas">
                <img className="welcome__canvas-ground" src={ground} alt=""/>
                <canvas></canvas>
            </div>
            <div className="welcome__text-content">
                <h1>
                    
                </h1>
            </div>
        </div>
    )
}

export default Welcome