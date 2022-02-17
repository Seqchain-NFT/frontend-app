export default {
    mouse: null,
    startTime: performance.now(),
    handlers: [],

    getElementCoords(domElement) {
        return {
            top: domElement.getBoundingClientRect().top + window.scrollY,
            bottom: domElement.getBoundingClientRect().bottom + window.scrollY,
            left: domElement.getBoundingClientRect().left + window.scrollX,
            right: domElement.getBoundingClientRect().right + window.scrollX,
            height: domElement.getBoundingClientRect().height,
            width: domElement.getBoundingClientRect().width,
        }
    },
    getScrollCoordsFromElement(domElement) {
        const domElementCoords = this.getElementCoords(domElement)
        return {
            windowTop: {
                fromTop: window.scrollY - domElementCoords.top,
                fromBetweenTopMiddle: window.scrollY - (domElementCoords.top + domElementCoords.height / 4),
                fromMiddle: window.scrollY - (domElementCoords.top + domElementCoords.height / 2),
                fromBetweenMiddleBottom: window.scrollY - (domElementCoords.bottom - domElementCoords.height / 4),
                fromBottom: window.scrollY - domElementCoords.bottom
            },
            windowBottom: {
                fromTop: window.scrollY + window.innerHeight - domElementCoords.top,
                fromBetweenTopMiddle: window.scrollY + window.innerHeight - (domElementCoords.top + domElementCoords.height / 4),
                fromMiddle: window.scrollY + window.innerHeight - (domElementCoords.top + domElementCoords.height / 2),
                fromBetweenMiddleBottom: window.scrollY + window.innerHeight - (domElementCoords.bottom - domElementCoords.height / 4),
                fromBottom: window.scrollY + window.innerHeight - domElementCoords.bottom
            }
        }
    },
    getMouseWindowCoords() {
        if (this.mouse === null) return { x: null, y: null }
        return {
            x: this.mouse.clientX,
            y: this.mouse.clientY,
        }
    },
    getMouseDocumentCoords() {
        if (this.mouse === null) return { x: null, y: null }
        return {
            x: this.mouse.pageX,
            y: this.mouse.pageY,
        }
    },

    isElementVisible(domElement) {
        const domElementCoords = this.getElementCoords(domElement)
        return (domElementCoords.bottom >= window.scrollY && domElementCoords.top <= window.scrollY + window.innerHeight)
    },
    isElementFullyVisible(domElement) {
        const domElementCoords = this.getElementCoords(domElement)
        return (domElementCoords.bottom <= window.scrollY + window.innerHeight && domElementCoords.top >= window.scrollY)
    },
    isElementHovered(domElement) {
        const domElementCoords = this.getElementCoords(domElement)
        const mouseCoords = this.getMouseDocumentCoords()
        return (domElementCoords.top < mouseCoords.y && domElementCoords.bottom > mouseCoords.y && domElementCoords.left < mouseCoords.x && domElementCoords.right > mouseCoords.x)
    },

    useMouseEvent(domElement = document) {
        domElement.addEventListener('mousemove', function(event) {
            this.mouse = event
            domElement.dispatchEvent(new CustomEvent("mouseupdate", {
                bubbles: true, 
                detail: {
                    documentCoords: this.getMouseDocumentCoords(),
                    windowCoords: this.getMouseWindowCoords(),
                }
            }))
        }.bind(this))
        domElement.addEventListener('mouseenter', function(event) {
            this.mouse = event
            domElement.dispatchEvent(new CustomEvent("mouseupdate", {
                bubbles: true, 
                detail: {
                    documentCoords: this.getMouseDocumentCoords(),
                    windowCoords: this.getMouseWindowCoords(),
                }
            }))
        }.bind(this))
    },

    setToRender(handler, label = this.handlers.length) {
        this.handlers.push({hd: handler, label})
    },
    removeFromRender(label = 'removeLastFromRender') {
        let isRequested = 0
        if (label === 'removeLastFromRender') {this.handlers = this.handlers.slice(0, this.handlers.length - 1); return }
        this.handlers = this.handlers.filter(item => {
            if (item.label !== label) {
                return item
            }
            isRequested++
        })
        if (isRequested === 0) { console.warn(`No handlers with label "${label}" in rendering`) }
    },
    getRendering() {
        return this.handlers
    },
    render() {
        requestAnimationFrame(function render(time) {
            if (time - this.startTime > 10) {
                this.startTime = performance.now()
                this.handlers.forEach(item => item.hd(time))
            }
            requestAnimationFrame(render.bind(this))
        }.bind(this))
    },
}
