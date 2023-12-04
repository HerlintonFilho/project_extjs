Ext.define('ExtMVC.store.CargoSelect', {
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
                url: 'php/cargo/CargoSelect.php',
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