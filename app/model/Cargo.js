Ext.define('ExtMVC.model.Cargo', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'description', type: 'string'},
        {name: 'status_cargo', type: 'string'}
    ],
    exportRenderer: true
});