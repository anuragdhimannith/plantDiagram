import { dia, shapes } from '@clientio/rappid';

const Container = dia.Element.define('app.Container', {
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            cursor: 'default'
        },
        label: {
            fontFamily: 'sans-serif',
            textVerticalAnchor: 'middle',
            textAnchor: 'middle',
            x: 'calc(0.5 * w)',
            y: 25,
            fontSize: 16,
            fontWeight: 700,
            fill: '#FFFFFF',
            style: { textTransform: 'uppercase' },
            pointerEvents: 'none'
        }
    },
    z: 1
}, {
    markup: [{
        tagName: 'rect',
        selector: 'body'
    }, {
        tagName: 'text',
        selector: 'label'
    }, {
        tagName: 'path',
        selector: 'grid',
        attributes: {
            'stroke': 'white',
            'stroke-opacity': 0.05,
            'fill': 'none'
        }
    }]
}, {
    isContainer(el: dia.Element): boolean {
        return el.get('type') === 'app.Container';
    }
});

const Child = dia.Element.define('app.Child', {
    z: 2,
    attrs: {
        body: {
            width: 'calc(w)',
            height: 'calc(h)',
            fill: '#FFFFFF',
            stroke: 'none',
            strokeWidth: 2
        },
        label: {
            textVerticalAnchor: 'middle',
            textAnchor: 'middle',
            x: 'calc(0.5 * w)',
            y: 'calc(0.5 * h)',
            fontFamily: 'sans-serif',
            fontSize: 16,
            fontWeight: 700,
            fill: '#FFFFFF',
            style: { textTransform: 'uppercase' }
        }
    }
}, {
    markup: [{
        tagName: 'rect',
        selector: 'body',
    }, {
        tagName: 'text',
        selector: 'label'
    }]
});

const Link = dia.Link.define('Link', {
    z: -1,
    attrs: {
        root: {
            cursor: 'pointer'
        },
        line: {
            fill: 'none',
            connection: true,
            stroke: '#A0A0A0',
            strokeWidth: 1.5
        }
    }
}, {
    markup: [{
        tagName: 'path',
        selector: 'line'
    }]
});

declare module '@clientio/rappid' {
    namespace shapes {
        namespace app {
            class Container extends dia.Element {
                static isContainer(el: dia.Element): boolean;
            }
            class Child extends dia.Element {
            }

            class Link extends dia.Link {
            }
        }
    }
}

Object.assign(shapes, {
    app: {
        Container,
        Child,
        Link
    }
});
