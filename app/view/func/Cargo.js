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
                // Verifique o valor do status e defina a cor do texto com base nele
                var cor = (value == 'Ativo') ? 'green' : 'red';

                // Configurar o estilo da célula para alterar a cor do texto
                meta.style = 'color: ' + cor + '; font-weight: bold;';
                
                // Retornar o valor do status para exibição na célula
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
            store: 'ExtMVC.store.Cargo',
            dock: 'bottom',
            displayInfo: true,
            displayMsg: 'Exibindo registro {0} - {1} de {2}',
            emptyMsg: 'Nenhum registro encontrado'
        }
    ]
        
});