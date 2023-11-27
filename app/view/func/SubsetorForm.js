Ext.define('ExtMVC.view.func.SubsetorForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.subsetorform',
 
    title: 'Adicionar / Editar Subsetor',
    width: 300,
    height: 200,
    layout: 'fit',
    iconCls: 'icon-grid',
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
                    name: 'subsetor_nome',
                    fieldLabel: 'Nome',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Setor',
                    inputId: 'selectSetor',
                    store: 'ExtMVC.store.Setor',
                    displayField: 'nome',
                    valueField: 'nome'
                }
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