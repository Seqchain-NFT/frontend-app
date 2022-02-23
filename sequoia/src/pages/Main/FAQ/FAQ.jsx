import './FAQ.scss'

import Accordion from '../../../components/UI/Accordion/Accordion'

const questions = [
    {
        title: 'How many participants will be admitted to the Whitelist?',
        body: 'A total of 350 participants will be admitted. Each participant will be able to mint 1 NFT. On the day of presale.'
    },
    {
        title: 'When is the Alpha Generation Public Sale coming up?',
        body: 'The public sale of Seqchain NFT Alpha Generation is scheduled for late February 2022.'
    },
    {
        title: 'What will the price be for Whitelist members on Presale day?',
        body: 'The price will be 20% off ($400). The price will be set at the exchange rate in ETH on the day of presale.'
    },
    {
        title: 'How much Seqchain NFT can be mined per Presale day?',
        body: 'On the Presale day, each Whitelist participant will be able to mint 1 Seqchain NFT.'
    },
    {
        title: 'How much Seqchain NFT can I min in one Public Sale day?',
        body: 'You can mint up to 3 Seqchain NFTs at a time.'
    },
    {
        title: 'By purchasing a Seqchain NFT, who owns the tree?',
        body: 'You become the full owner of both the tree and the plot of 20x20 meters in Albota de Sus, Moldova. The only thing we reserve the right to refuse you if you want to cut down a tree.'
    },
    {
        title: 'What can I spend SEQ Coins on?',
        body: 'You will be able to buy our future NFT collections, improve the plot and the tree, sell and buy a coin on DEX & CEX, exchange for valuable items from other projects of the Seqchain team.'
    },
    {
        title: 'How can I see my tree?',
        body: 'Follow social networks, where we regularly publish photos and videos of our trees. And also in April 2023, seedlings will be planted in Albota de Sus, Moldova. We will install webcams and you will be able to watch the tree online in your personal account. Or you can personally come and see.'
    },
    {
        title: 'What is SEQ Coin?',
        body: 'This is the main and only coin of the project. Coins are mined daily with Seqchain NFT.'
    },
]

const FAQ = () => {
    return (
        <div id="faq" className="FAQ">
            <h2>FAQ</h2>
            <div className="FAQ__list">
                {questions.map((que, idx) => (
                    <Accordion key={idx} title={que.title} body={que.body} />
                ))}
            </div>
        </div>
    )
}

export default FAQ