import './Label.scss'

const Label = ({ rarity, children }) => {
    const labelColors = {
        'common': '#748B1D', 
        'legendary': '#EB462E', 
        'epic': '#2C41AD', 
        'rare': '#C87F26', 
    }
    return (
        <div style={{backgroundColor: labelColors[rarity]}} className="rarity-label">{ children }</div>
    )
}

export default Label