import './Tooltip.scss'
import ReactTooltip from 'react-tooltip';

const Tooltip = () => {
    return (
        <ReactTooltip />
    )
}

const meetTooltipContent = `
    <div class='title'>$SEQ COin MINING</div>
    <p>Each Seqchain NFT generates a certain number of SEQ coins daily. The number of coins generated depends on the rarity and the presence of NFTs from companion collections that increase the mining speed.</p>
`
const meetTooltipClass = 'meet__tooltip'

export default Tooltip
export { meetTooltipContent, meetTooltipClass }