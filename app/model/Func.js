Ext.define('ExtMVC.model.Func', {
    extend: 'Ext.data.Model',

    idProperty: 'funcionario_id',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'nome', type: 'string'},
        {name: 'sobrenome', type: 'string'},
        {name: 'data_nasc', type:'date', dateFormat: 'Y-m-d', 
        convert: function(value, record){
            var dt = Ext.Date.add(new Date(value), Ext.Date.DAY, 1)
            return Ext.util.Format.date(dt, 'd/m/Y');
        }},
        {name: 'idade', type: 'int'},
        {name: 'sexo', type: 'string'},
        {name: 'salario', type: 'float'},
        {name: 'telefone', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'cargo', type: 'string'},
        {name: 'setor', type: 'string'},
        {name: 'subsetor', type: 'string'}
    ]
});