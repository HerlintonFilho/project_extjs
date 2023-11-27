Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.container.Viewport',
    itemId: 'mainpanel',
    requires:[
        'Ext.layout.container.Fit',
        // 'ExtMVC.view.func.Funcionario',
        'ExtMVC.view.func.Grid'
        //'ExtMVC.view.Main'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'gridmain'
    }]
});
