Ext.define('ExtMVC.Application', {
    name: 'ExtMVC',

    extend: 'Ext.app.Application',

    views: [
        
    ],
    requires: [
    	'Ext.toolbar.Paging',
        'Ext.form.Panel'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        'ExtMVC.store.Func',
        'ExtMVC.store.Cargo',
        'ExtMVC.store.Setor',
        'ExtMVC.store.Subsetor'
    ]
});
