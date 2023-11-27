Ext.define('ExtMVC.model.Setor', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'nome', type: 'string'},
        {name: 'abreviacao', type: 'string'}
    ]
});