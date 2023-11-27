var status = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"A", "name":"Ativo"},
        {"abbr":"I", "name":"Inativo"}
    ]
});


Ext.define('ExtMVC.view.func.CargoForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.cargoform',

    height: 200,
    width: 300,
    layout: 'fit',
    iconCls: 'icon-user',
    title: 'Editar/Criar Cargo',
    scrollable: true,
    resizable: false,
    autoShow: true,
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            defaults: {
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'id'
                },
                {
                    xtype: 'textfield',
                    name: 'description',
                    fieldLabel: 'Descrição',
                    allowBlank: false
                },
                {
                    itemId: 'comboSelect',
                    autoSelect: true,
                    xtype: 'combobox',
                    fieldLabel: 'Status',
                    inputId: 'selectStatus',
                    store: status,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'name'
                },
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                {
                    xtype:'button',
                    text: 'Salvar',
                    itemId: 'save',
                    iconCls: 'icon-save'
                },
                {
                    xtype:'button',
                    text: 'Cancelar',
                    itemId: 'cancel',
                    iconCls: 'icon-reset'
                },
            ]
        }
    ]
})