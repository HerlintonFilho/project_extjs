Ext.define('ExtMVC.view.func.Funcionario', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.funcionariosgrid',


    store: 'ExtMVC.store.Func',
    title: 'Funcionários',
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
            flex: 0,
            dataIndex: 'nome'
        },
        {
            text: 'Sobrenome',
            width: 100,
            dataIndex: 'sobrenome'
        },
        {
            text: 'data de nascimento',
            width: 170,
            dataIndex: 'data_nasc',
        },
        {
            text: 'Idade',
            width: 100,
            dataIndex: 'idade'
        },
        {
            text: 'Sexo',
            width: 100,
            dataIndex: 'sexo'
        },
        {
            text: 'Salario',
            width: 100,
            dataIndex: 'salario'
        },
        {
            text: 'Telefone',
            width: 100,
            dataIndex: 'telefone'
        },
        {
            text: 'Email',
            flex: 1,
            width: 100,
            dataIndex: 'email'
        },
        {
            text: 'Cargo',
            width: 100,
            dataIndex: 'cargo'
        },
        {
            text: 'Setor',
            width: 100,
            dataIndex: 'setor'
        },
        {
            text: 'Subsetor',
            width: 100,
            dataIndex: 'subsetor'
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
                }        
            ]
        },
        {
            xtype: 'pagingtoolbar',
            store: 'ExtMVC.store.Func',
            dock: 'bottom',
            displayInfo: true,
            displayMsg: 'Exibindo registro {0} - {1} de {2}',
            emptyMsg: 'Nenhum registro encontrado'
        }
    ]
        
});