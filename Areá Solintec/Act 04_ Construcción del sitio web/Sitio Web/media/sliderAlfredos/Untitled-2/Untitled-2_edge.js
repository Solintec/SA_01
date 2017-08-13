/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'GTA-V-portada2',
                            type: 'image',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"GTA-V-portada.jpg",'0px','0px']
                        },
                        {
                            id: 'HD720-022',
                            type: 'image',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HD720-02.jpg",'0px','0px']
                        },
                        {
                            id: 'maxresdefault2',
                            type: 'image',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"maxresdefault.jpg",'0px','0px']
                        },
                        {
                            id: 'KingstonProducts2',
                            type: 'image',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"KingstonProducts.jpg",'0px','0px']
                        },
                        {
                            id: 'need-most-wanted2',
                            type: 'image',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"need-most-wanted.png",'0px','0px']
                        },
                        {
                            id: 'slider_one2',
                            type: 'image',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"slider_one.png",'0px','0px']
                        },
                        {
                            id: 'sphere-155819_6402Copy9',
                            type: 'image',
                            rect: ['74.3%', '89.3%', '4.4%', '10%', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"sphere-155819_640.png",'0px','0px']
                        },
                        {
                            id: 'sphere-155819_6402',
                            type: 'image',
                            rect: ['80.8%', '89.3%', '4.4%', '10%', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"sphere-155819_640.png",'0px','0px']
                        },
                        {
                            id: 'sphere-155819_6402Copy',
                            type: 'image',
                            rect: ['87.1%', '89.3%', '4.4%', '10%', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"sphere-155819_640.png",'0px','0px']
                        },
                        {
                            id: 'sphere-155819_6402Copy2',
                            type: 'image',
                            rect: ['93.6%', '89.3%', '4.4%', '10%', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"sphere-155819_640.png",'0px','0px']
                        },
                        {
                            id: 'sphere-155819_6402Copy3',
                            type: 'image',
                            rect: ['68%', '89.3%', '4.4%', '10%', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"sphere-155819_640.png",'0px','0px']
                        },
                        {
                            id: 'sphere-155819_6402Copy4',
                            type: 'image',
                            rect: ['62.1%', '89.3%', '4.4%', '10%', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"sphere-155819_640.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 16750,
                    autoPlay: true,
                    labels: {
                        "uno": 0,
                        "dos": 3000,
                        "tres": 5750,
                        "cuatro": 8500,
                        "cinco": 11250,
                        "seis": 14000
                    },
                    data: [
                        [
                            "eid7",
                            "opacity",
                            2750,
                            500,
                            "linear",
                            "${need-most-wanted2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            5250,
                            500,
                            "linear",
                            "${need-most-wanted2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "opacity",
                            13750,
                            500,
                            "linear",
                            "${GTA-V-portada2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            16250,
                            500,
                            "linear",
                            "${GTA-V-portada2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9",
                            "opacity",
                            5500,
                            500,
                            "linear",
                            "${KingstonProducts2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "opacity",
                            8000,
                            500,
                            "linear",
                            "${KingstonProducts2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${slider_one2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${slider_one2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "opacity",
                            8250,
                            500,
                            "linear",
                            "${maxresdefault2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            10750,
                            500,
                            "linear",
                            "${maxresdefault2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13",
                            "opacity",
                            11000,
                            500,
                            "linear",
                            "${HD720-022}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            13500,
                            500,
                            "linear",
                            "${HD720-022}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Untitled-2_edgeActions.js");
})("EDGE-1056160999");
