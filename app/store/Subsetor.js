Ext.define('ExtMVC.store.Subsetor', {
    extend: 'Ext.data.Store',

    model: 'ExtMVC.model.Subsetor',


    constructor: function(cfg){
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            pageSize: 20,
            proxy: {
                type: 'ajax',
                api: {
                    create: 'php/subsetor/criaSubSetor.php',
                    read: 'php/subsetor/listaSubSetor.php',
                    update: 'php/subsetor/atualizaSubSetor.php',
                    destroy: 'php/subsetor/deletaSubSetor.php'    
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
        }, cfg)])
    }
})