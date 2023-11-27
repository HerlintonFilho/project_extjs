Ext.define('ExtMVC.view.func.Subsetor', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.subsetoresgrid',


    store: 'ExtMVC.store.Subsetor',
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
            dataIndex: 'subsetor_nome'
        },
        {
            text: 'Setor',
            flex: 1,
            width: 100,
            dataIndex: 'setor_name'
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
                {
                    xtype: 'button',
                    text: 'Excluir',
                    itemId: 'delete',
                    iconCls: 'icon-delete'
                },
                {
                    xtype: 'button',
                    text: 'Relatório',
                    itemId: 'report',
                    iconCls: 'icon-report'
                }       
            ]
        },
        {
            xtype: 'pagingtoolbar',
            store: 'ExtMVC.store.Subsetor',
            dock: 'bottom',
            displayInfo: true,
            displayMsg: 'Exibindo registro {0} - {1} de {2}',
            emptyMsg: 'Nenhum registro encontrado'
        }
    ]
})