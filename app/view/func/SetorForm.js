Ext.define('ExtMVC.view.func.SetorForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.setorform',

    title: 'Adicionar / Editar Setor',
    width: 300,
    height: 200,
    layout: 'fit',
    iconCls: 'icon-grid',
    scrollable: true,
    resizable: false,
    autoShow: true,
    modal: true,
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
                    name: 'nome',
                    fieldLabel: 'Nome',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'abreviacao',
                    fieldLabel: 'Abreviação',
                    allowBlank: false
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