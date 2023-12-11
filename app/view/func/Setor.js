Ext.define('ExtMVC.view.func.Setor', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.setoresgrid',


    store: 'ExtMVC.store.Setor',
    title: 'Setores',
    iconCls: 'icon-grid',
    
    columns: [
        {
            text: 'ID',
            width: 35,
            dataIndex: 'id'
        },
        {
            text: 'Nome',
            width: 170,
            flex: 1,
            dataIndex: 'nome'
        },
        {
            text: 'Abreviação',
            width: 100,
            dataIndex: 'abreviacao'
        },
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Novo',
                    itemId: 'add',
                    iconCls: 'icon-add'
                },
                {xtype: 'tbseparator'},
                {
                    xtype: 'button',
                    text: 'Excluir',
                    itemId: 'delete',
                    iconCls: 'icon-delete'
                },
                {xtype: 'tbseparator'},
                {
                    xtype: 'button',
                    text: 'Exportar Excel',
                    itemId: 'report',
                    iconCls: 'icon-report'
                },
                {xtype: 'tbseparator'},
                {
                    xtype: 'button',
                    text: 'Importar excel',
                    itemId: 'import',
                    iconCls: 'icon-import'
                }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            store: 'ExtMVC.store.Setor',
            dock: 'bottom',
            displayInfo: true,
            displayMsg: 'Exibindo registro {0} - {1} de {2}',
            emptyMsg: 'Nenhum registro encontrado'
        }
    ]
})