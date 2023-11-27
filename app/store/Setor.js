Ext.define('ExtMVC.store.Setor', {
    extend: 'Ext.data.Store',

    model: 'ExtMVC.model.Setor',


    constructor: function(cfg){
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            pageSize: 20,
            proxy: {
                type: 'ajax',
                api: {
                    create: 'php/setor/criaSetor.php',
                    read: 'php/setor/listaSetor.php',
                    update: 'php/setor/atualizaSetor.php',
                    destroy: 'php/setor/deletaSetor.php'    
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