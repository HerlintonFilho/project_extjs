    Ext.define('ExtMVC.view.func.Grid', {
        extend: 'Ext.container.Container',
        xtype: 'gridmain',
        itemId: 'gridprincipal',
        requires:[
            'Ext.tab.Panel',
            'Ext.layout.container.Border',
            'Ext.tree.Panel',
            'ExtMVC.view.func.Funcionario'
        ],
        layout: {
            type: 'border',
        },
        items: [
            {
                region: 'west',
                xtype: 'treepanel',
                itemId: 'treewest',
                title: 'Menu',
                width: 150,
                rootVisible: false,
                collapsed: false,
                collapsible: true,
                root: {
                    expanded: false,
                    rootVisible: true,
                    itemId: 'rooth',
                    children: [        
                        { text: "Cadastro",id: 'cadastrofunc', expanded: false, children: [
                                {text:"Funcionario", id:"funcionario", leaf: true},            
                                {text:"Cargo", id:"cargo", leaf: true},
                                {text:"Setor", id:"setor", leaf: true},
                                {text: "Subsetor", id: "subsetor", leaf: true}            
                            ]
                        },
                        {text:"Relatório", id:"relatorio_funcionario", leaf: true}
                    ]
                },
                listeners:{
                    itemclick: function(self, node, item, index, event){
                        var central = Ext.ComponentQuery.query('panel#panelCentral')[0];
                        central.removeAll();
                        if(index == 1){
                            var grid = Ext.create('ExtMVC.view.func.Funcionario');
                            central.add(grid);
                        }
                        if(index == 2){
                            var grid = Ext.create('ExtMVC.view.func.Cargo');
                            central.add(grid);
                        }
                        if(index == 3){
                            var grid = Ext.create('ExtMVC.view.func.Setor');
                            central.add(grid);
                        }
                        if(index == 4){
                            var grid = Ext.create('ExtMVC.view.func.Subsetor');
                            central.add(grid);
                        }
                        if(index == 5){
                            Ext.Msg.alert('Alerta', 'Página de Relatório')
                        }
                    }
                }
            },
            {
                region: 'center',
                itemId: 'panelCentral',
            }
        ],
    })