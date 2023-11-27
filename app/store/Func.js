Ext.define('ExtMVC.store.Func', {
    extend: 'Ext.data.Store',

    idProperty: 'funcionario_id',
    model: 'ExtMVC.model.Func',


    autoLoad: true,
    pageSize: 20,
    proxy: {
        type: 'ajax',
        api: {
            create: 'php/func/criaFunc.php',
            read: 'php/func/listaFunc.php',
            update: 'php/func/atualizaFunc.php',
            destroy: 'php/func/deletaFunc.php'    
        },
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json',
            encode: true,
            root: 'data',
            writeAllFields: true
        }
    },        


    // constructor: function(cfg){
    //     var me = this;
    //     cfg = cfg || {};
    //     me.callParent([Ext.apply({
            
    //     }, cfg)])
    // }
})