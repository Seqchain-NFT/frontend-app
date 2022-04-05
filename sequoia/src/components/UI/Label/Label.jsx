import './Label.scss'

const Label = ({ rarity }) => {
    const labelColors = {
        '0': '#748B1D',
        '1': '#748B1D',
        '2': '#C87F26',
        '3': '#2C41AD',
        '4': '#EB462E',
    }
    const labelText = {
        '0': 'undefined',
        '1': 'common',
        '2': 'rare',
        '3': 'epic',
        '4': 'legendary',
    }
    return (
        <div style={{backgroundColor: labelColors[rarity]}} className="rarity-label">{ labelText[rarity] }</div>
    )
}

export default Label