/*! JointJS+ v3.6.2 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2022 client IO

 2022-11-30 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


(function(joint, util) {

    joint.shapes.app.NavigatorElementView = joint.dia.ElementView.extend({

        body: null,

        markup: [{
            tagName: 'rect',
            selector: 'body',
            attributes: {
                'fill': '#31d0c6'
            }
        }],

        initFlag: ['RENDER', 'UPDATE', 'TRANSFORM'],

        presentationAttributes: {
            size: ['UPDATE'],
            position: ['TRANSFORM'],
            angle: ['TRANSFORM']
        },

        confirmUpdate: function(flags) {

            if (this.hasFlag(flags, 'RENDER')) this.render();
            if (this.hasFlag(flags, 'UPDATE')) this.update();
            if (this.hasFlag(flags, 'TRANSFORM')) this.updateTransformation();
        },

        render: function() {
            var doc = util.parseDOMJSON(this.markup);
            this.body = doc.selectors.body;
            this.el.appendChild(doc.fragment);
        },

        update: function() {
            var size = this.model.size();
            this.body.setAttribute('width', size.width);
            this.body.setAttribute('height', size.height);
        }
    });

    joint.shapes.app.NavigatorLinkView = joint.dia.LinkView.extend({

        defaultTheme: null,

        initialize: function() {
            joint.mvc.View.prototype.initialize.apply(this, arguments);
        },

        onMount: util.noop,

        render: util.noop,

        update: util.noop
    });

})(joint, joint.util);
