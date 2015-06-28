$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 86,
            ipad: null,
            itouch: 2
        }, {
            period: '2010 Q2',
            iphone: 78,
            ipad: 22,
            itouch: 9
        }, {
            period: '2010 Q3',
            iphone: 75,
            ipad: 19,
            itouch: 8
        }, {
            period: '2010 Q4',
            iphone: 89,
            ipad: 35,
            itouch: 5
        }, {
            period: '2011 Q1',
            iphone: 88,
            ipad: 19,
            itouch: 2
        }, {
            period: '2011 Q2',
            iphone: 77,
            ipad: 42,
            itouch: 8
        }, {
            period: '2011 Q3',
            iphone: 65,
            ipad: 37,
            itouch: 15
        }, {
            period: '2011 Q4',
            iphone: 90,
            ipad: 5,
            itouch: 1
        }, {
            period: '2012 Q1',
            iphone: 98,
            ipad: 4,
            itouch: 2
        }, {
            period: '2012 Q2',
            iphone: 74,
            ipad: 13,
            itouch: 7
        }],
        xkey: 'period',
        ykeys: ['itouch', 'ipad', 'iphone'],
        labels: ['H2S', 'Alcohol', 'Oxygen'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "H2S Levels (ppm)",
            value: 0.4
        }, {
            label: "Oxygen Levels (ppm)",
            value: 80
        }, {
            label: "Alcohol Levels (ppm)",
            value: 19
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 9
        }, {
            y: '2007',
            a: 75,
            b: 16
        }, {
            y: '2008',
            a: 50,
            b: 20
        }, {
            y: '2009',
            a: 75,
            b: 20
        }, {
            y: '2010',
            a: 50,
            b: 4
        }, {
            y: '2011',
            a: 75,
            b: 19
        }, {
            y: '2012',
            a: 100,
            b: 5
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Oxygen (ppm)', 'H2S (ppm)'],
        hideHover: 'auto',
        resize: true
    });

});
