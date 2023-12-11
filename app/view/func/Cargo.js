Ext.define('ExtMVC.view.func.Cargo', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.cargosgrid',
    store: 'ExtMVC.store.Cargo',
    title: 'Cargos',
    iconCls: 'icon-grid',
    
    columns: [
        {
            text: 'ID',
            width: 35,
            dataIndex: 'id'
        },
        {
            text: 'Descrição',
            width: 170,
            flex: 1,
            dataIndex: 'description'
        },
        {
            text: 'Status',
            width: 100,
            dataIndex: 'status_cargo',
            renderer: function(value, meta, record) {
                var cor = (value == 'Ativo') ? 'green' : 'red';
                meta.style = 'color: ' + cor + '; font-weight: bold;';
                
                return value.toUpperCase();
            }
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
            store: 'ExtMVC.store.Cargo',
            dock: 'bottom',
            displayInfo: true,
            displayMsg: 'Exibindo registro {0} - {1} de {2}',
            emptyMsg: 'Nenhum registro encontrado'
        }
    ]
        
});