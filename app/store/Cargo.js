Ext.define('ExtMVC.store.Cargo', {
    extend: 'Ext.data.Store',

    model: 'ExtMVC.model.Cargo',


    constructor: function(cfg){
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            pageSize: 20,
            proxy: {
                type: 'ajax',
                api: {
                    create: 'php/cargo/criaCargo.php',
                    read: 'php/cargo/listaCargo.php',
                    update: 'php/cargo/atualizaCargo.php',
                    destroy: 'php/cargo/deletaCargo.php'    
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