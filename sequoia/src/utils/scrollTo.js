import renderer from './renderer'

const scrollTo = (domElementSelector) => {
    const domElement = document.querySelector(domElementSelector)
    if (domElement) {
        const domElementCoords = renderer.getElementCoords(domElement)
        window.scrollTo({
            top: domElementCoords.top - window.innerHeight / 10,
            behavior: 'smooth'
        })
    } else {
        console.warn(`No dom element with selector ${domElementSelector}`)
    }
}

export default scrollTo