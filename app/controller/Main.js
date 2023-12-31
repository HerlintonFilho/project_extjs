Ext.define('ExtMVC.controller.Main', {

    extend: 'Ext.app.Controller',
    models: [
    	'ExtMVC.model.Func',
        'ExtMVC.model.Cargo',
        'ExtMVC.model.Setor',
        'ExtMVC.model.Subsetor'
    ],

    stores: [
    	'ExtMVC.store.Func',
        'ExtMVC.store.Cargo',
        'ExtMVC.store.Setor',
        'ExtMVC.store.Subsetor'
    ],
    views: [
        'ExtMVC.view.func.Grid',
        'ExtMVC.view.func.Funcionario',
        'ExtMVC.view.func.Cargo',
        'ExtMVC.view.func.Setor',
        'ExtMVC.view.func.Subsetor'
    ],

    

    init: function(application){
        this.control({
            'field': {
                specialkey: this.onProccessKey
            },
            'funcionariosgrid dataview' : {
                render: this.onGridRender,
                itemdblclick: this.onEditClick
            },
            'funcionariosgrid button#add':{
                click : this.onAddClick
            },
            'funcionariosgrid button#delete': {
                click : this.onDeleteClick
            },
            'funcionariosgrid button#report': {
                click : this.onReportFuncClick
            },
            'funcionariosgrid button#import': {
                click : this.onImportFunc
            },
            'funcionariosgrid button#print':{
                click : this.onPrintFunc
            },
            'funcionariosgrid button#search':{
                click : this.onSearch
            },
            'funcform button#cancel':{
                click : this.onCancelClick
            },
            'funcform button#save': {
                click : this.onSaveClick
            },
            'cargosgrid dataview' : {
                itemdblclick: this.onEditCargo
            },
            'cargosgrid button#add' : {
                click : this.onAddCargo
            },
            'cargosgrid button#report' : {
                click : this.onReportCargoClick
            },
            'cargosgrid button#import' : {
                click : this.onImportCargo
            },
            'cargosgrid button#delete' : {
                click : this.onDeleteCargo
            },
            'cargoform button#cancel' : {
                click: this.onCancelForm
            },
            'cargoform button#save' : {
                click : this.onSaveCargo
            },
            'setoresgrid dataview':{
                itemdblclick: this.onEditSetor
            },
            'setoresgrid button#add':{
                click: this.onAddSetor
            },
            'setoresgrid button#report':{
                click : this.OnReportSetorClick
            },
            'setoresgrid button#delete':{
                click: this.onDeleteSetor
            },
            'setoresgrid button#import':{
                click: this.onImportSetor
            },
            'setorform button#cancel':{
                click: this.onCancelFormSetor
            },
            'setorform button#save':{
                click: this.onSaveSetor
            },
            'subsetoresgrid dataview':{
                itemdblclick: this.onEditSubsetor
            },
            'subsetoresgrid button#add':{
                click: this.onAddSubsetor
            },
            'subsetoresgrid button#import':{
                click: this.onImportSubsetor
            },
            'subsetoresgrid button#delete':{
                click: this.onDeleteSubsetor
            },
            'subsetoresgrid button#report':{
                click: this.onReportSubsetorClick
            },
            'subsetorform button#cancel':{
                click: this.onCancelFormSubsetor
            },
            'subsetorform button#save':{
                click: this.onSaveSubsetor
            }
        });
    },

    onProccessKey: function(field, e, eOpts){
        if (e.getKey() === e.ENTER) {
            var form = field.up('form'),
                fields = form.query('field');
                currentFieldIdx = fields.indexOf(field);
            if(currentFieldIdx > -1) {
                nextField = fields[currentFieldIdx+1];
                nextField && nextField.focus();
            }
        }
    },

    onGridRender: function(grid, eOpts){
        grid.getStore().load();
    },

    openForm: function(title){
        var win = Ext.create('ExtMVC.view.func.FuncForm');
        win.setTitle(title);
        return win;
    },

    

    onEditClick: function(grid, record, item, index, e, eOpts){
        var win = this.openForm('Editar Funcionário - ' + record.get('nome') +  ' ' + record.get('sobrenome'));
        var form = win.down('form');
        form.loadRecord(record);
        var radio = form.down('[name=sexo]');
        radio.setValue({
            opcao: record.get('sexo')
        });
    },

    onAddClick: function(btn, e, eOpts){
        this.openForm('Novo Funcionário');
    },
    
    onCancelClick: function(btn, e, eOpts){
        var win = btn.up('window');
        var form = win.down('form');
        form.getForm().reset();
        win.close();
    },

    onDeleteClick: function(btn, e, eOpts){
        var grid = btn.up('grid');
        var records = grid.getSelectionModel().getSelection();
        var store = grid.getStore();
        store.remove(records);
        store.sync();
    },

    onReportFuncClick: function(btn, e, eOpts){
        var store = Ext.ComponentQuery.query('funcionariosgrid')[0].getStore();
        var records = store.getRange();
        var dataToSend = records.map(function(record) {
            return record.getData();
        });
    
        var encodedData = encodeURIComponent(JSON.stringify(dataToSend));
    
        var win = Ext.create('Ext.window.Window', {
            title: 'Visualizar',
            width: 600,
            height: 200,
            modal: true,
            layout: 'fit',
            maximizable: true
        });
    
        var href = '../../extjs-crudmvc/php/func/exportFunc.php?data=' + encodedData;
        win.html = '<iframe src="' + href + '" name="principal" width="100%" height="100%" scrolling="auto" frameborder="0"></iframe>';
        win.show();
    },

    onImportFunc: function(btn, e, eOpts){
        var grid = Ext.ComponentQuery.query('funcionariosgrid')[0];
        var store = grid.getStore();
        var win = Ext.create('Ext.window.Window', {
            title: 'Import',
            width: 600,
            height: 200,
            padding: 35,
            modal: true,
            layout: 'fit',
            maximizable: true,
            items: [
                {
                    xtype: 'form',
                    title: 'Import file',
                    padding: 2,
                    width: 400,
                    bodyPadding: 10,
                    frame: true,
                    items:[{
                        xtype: 'filefield',
                        name: 'file',
                        fieldLabel: 'Arquivo',
                        labelWidth: 50,
                        msgTarget: 'side',
                        allowBlank: false,
                        anchor: '100%',
                        buttonText: 'Selecione o Arquivo',
                        
                    }],
                    buttons: [{
                        text: 'Carregar',
                        handler: function(){
                            var form = this.up('form').getForm();
                            if(form.isValid()){
                                form.submit({
                                    url: '../../extjs-crudmvc/php/func/importFunc.php',
                                    waitMsg: 'Uploading your file...',
                                    success: function(fp, o) {
                                        Ext.Msg.alert('Success', 'Your file has been uploaded.');
                                        store.load();
                                        win.close();
                                    }
                                });
                            }
                        }
                    }]
                }
            ],
        })
        win.show()
    },

    onPrintFunc: function(btn,e,eOpts){
        var reportWindow = window.open('', '_blank');
        Ext.Ajax.request({
            url: '../../extjs-crudmvc/php/func/printFunc.php',
            method: 'GET',
            success: function (response) {
                reportWindow.document.write(response.responseText);
            },
            failure: function (response) {
                Ext.Msg.alert('Erro', 'Erro ao gerar relatório.');
            }
    });
    },

    onSearch: function(btn, e, eopts){
        var grid = Ext.ComponentQuery.query('funcionariosgrid')[0];
        var store = grid.getStore();
        var field = Ext.ComponentQuery.query('funcionariosgrid textfield#search_field')[0];
        var value = field.getValue();

        if(value){
            store.filter({
                property: 'nome', 
                anyMatch: true,
                caseSensitive: false,
                value: value
            });
            if (store.getCount() === 0) {
                Ext.Msg.alert('Aviso', 'Nenhum registro encontrado na pesquisa.');
                store.clearFilter();
                field.setValue('');
            }
        }else{
            store.clearFilter();
        }

        
    },

    onSaveClick: function(btn, e, eOpts){
        var win = btn.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            record = form.getRecord(),
            grid = Ext.ComponentQuery.query('funcionariosgrid')[0],
            
            store = grid.getStore();

        if (record){
            
            record.set(values);

        } else { 

            var func = Ext.create('ExtMVC.model.Func',{
                nome: values.nome,
                sobrenome: values.sobrenome,
                data_nasc: values.data_nasc,
                idade: values.idade,
                sexo: values.opcao,
                salario: values.salario,
                telefone: values.telefone,
                email: values.email,
                cargo: values.cargo,
                setor: values.setor,
                subsetor: values.subsetor
            });
            store.on('add', function (store, records, index, eOpts) {
                Ext.each(records, function (record) {
                    console.log('Registro adicionado:', record.getData());
                });
            }); 

            store.insert(0,func);
        }

        store.sync({
            success: function (batch, options) {
               console.log('Sync success:', batch.operations);
            },
            failure: function (batch, options) {
               console.log('Sync failure:', batch.operations);
            }
         });

        win.close();
    },

    openFormCargo: function(title){
        var win = Ext.create('ExtMVC.view.func.CargoForm');
        win.setTitle(title);
        return win;
    },

    onEditCargo: function(grid, record, item, index,  e, eOpts){
        var win = this.openFormCargo('Editar Cargo - ' + record.get('description'));
        var form = win.down('form');
        form.loadRecord(record);
    },

    onAddCargo: function(btn, e, eOpts){
        this.openFormCargo('Novo Cargo');
    },

    onCancelForm: function(btn, e, eOpts){
        var win = btn.up('window');
        var form = win.down('form');
        form.getForm().reset();
        win.close();
    },

    onDeleteCargo: function(btn, e, eOpts){
        var grid = btn.up('grid');
        var records = grid.getSelectionModel().getSelection();
        var store = grid.getStore();
        store.remove(records);
        store.sync();
    },

    onReportCargoClick: function(btn, e, eOpts) {
        var store = Ext.ComponentQuery.query('cargosgrid')[0].getStore();
        var records = store.getRange();
        var dataToSend = records.map(function(record) {
            return record.getData();
        });
    
        var encodedData = encodeURIComponent(JSON.stringify(dataToSend));
    
        var win = Ext.create('Ext.window.Window', {
            title: 'Visualizar',
            width: 600,
            height: 200,
            modal: true,
            layout: 'fit',
            maximizable: true
        });
    
        var href = '../../extjs-crudmvc/php/cargo/exportCargo.php?data=' + encodedData;
        win.html = '<iframe src="' + href + '" name="principal" width="100%" height="100%" scrolling="auto" frameborder="0"></iframe>';
        win.show();
    },
    

    onImportCargo: function(btn, e, eOpts){
        var grid = Ext.ComponentQuery.query('cargosgrid')[0];
        var store = grid.getStore();
        var win = Ext.create('Ext.window.Window', {
            title: 'Import',
            width: 600,
            height: 200,
            padding: 35,
            modal: true,
            layout: 'fit',
            maximizable: true,
            items: [
                {
                    xtype: 'form',
                    title: 'Import file',
                    padding: 2,
                    width: 400,
                    bodyPadding: 10,
                    frame: true,
                    items:[{
                        xtype: 'filefield',
                        name: 'file',
                        fieldLabel: 'Arquivo',
                        labelWidth: 50,
                        msgTarget: 'side',
                        allowBlank: false,
                        anchor: '100%',
                        buttonText: 'Selecione o Arquivo',
                        
                    }],
                    buttons: [{
                        text: 'Carregar',
                        handler: function(){
                            var form = this.up('form').getForm();
                            if(form.isValid()){
                                form.submit({
                                    url: '../../extjs-crudmvc/php/cargo/importCargo.php',
                                    waitMsg: 'Uploading your file...',
                                    success: function(fp, o) {
                                        Ext.Msg.alert('Success', 'Your file has been uploaded.');
                                        store.load();
                                        win.close();
                                    }
                                });
                            }
                        }
                    }]
                }
            ],
        })
        win.show()
    },

    onSaveCargo: function(btn, e, eOpts){
        var win = btn.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            record = form.getRecord(),
            grid = Ext.ComponentQuery.query('cargosgrid')[0],
            store = grid.getStore();
        if (record){
            
            record.set(values);

        } else { 

            var cargo = Ext.create('ExtMVC.model.Cargo',{
                description: values.description,
                status_cargo: values.status_cargo
            });

            store.insert(0,cargo);
        }

        store.sync();

        win.close();
    },

    openFormSetor: function(title){
        var win = Ext.create('ExtMVC.view.func.SetorForm');
        win.setTitle(title);
        return win
    },

    onEditSetor: function(grid, record, item, index, e, eOtps){
        var win = this.openFormSetor('Editar Setor - ' + record.get('nome'));
        var form  = win.down('form');
        form.loadRecord(record);
    },
    
    onAddSetor: function(btn, e, eOpts){
        this.openFormSetor('Novo Setor');
    },

    onCancelFormSetor: function(btn, e, eOpts){
        var win = btn.up('window');
        var form = win.down('form');
        form.getForm().reset();
        win.close();
    },

    onDeleteSetor: function(btn, e, eOpts){
        var grid = btn.up('grid');
        var records = grid.getSelectionModel().getSelection();
        var store = grid.getStore();
        store.remove(records);
        store.sync();
    },

    OnReportSetorClick: function(btn, e, eOpts){
        var store = Ext.ComponentQuery.query('setoresgrid')[0].getStore();
        var records = store.getRange();
        var dataToSend = records.map(function(record){
            return record.getData();
        })

        var encodeData = encodeURIComponent(JSON.stringify(dataToSend));

        var win = Ext.create('Ext.window.Window', {
            title: 'Visualizar',
            width: 600,
            height: 200,
            modal: true,
            layout: 'fit',
            maximizable: true
        })

        var href = '../../extjs-crudmvc/php/setor/exportSetor.php?data=' + encodeData;
        win.html = '<iframe src="' + href + '" name="principal" width="100%" height="100%" scrolling="auto" frameborder="0"></iframe>';
        win.show()
    },

    onImportSetor: function(btn, e , eOpts){
        var grid = Ext.ComponentQuery.query('setoresgrid')[0];
        var store = grid.getStore();
        var win = Ext.create('Ext.window.Window', {
            title: 'Import',
            width: 600,
            height: 200,
            padding: 35,
            modal: true,
            layout: 'fit',
            maximizable: true,
            items: [
                {
                    xtype: 'form',
                    title: 'Import file',
                    padding: 2,
                    width: 400,
                    bodyPadding: 10,
                    frame: true,
                    items:[{
                        xtype: 'filefield',
                        name: 'file',
                        fieldLabel: 'Arquivo',
                        labelWidth: 50,
                        msgTarget: 'side',
                        allowBlank: false,
                        anchor: '100%',
                        buttonText: 'Selecione o Arquivo',
                        
                    }],
                    buttons: [{
                        text: 'Carregar',
                        handler: function(){
                            var form = this.up('form').getForm();
                            if(form.isValid()){
                                form.submit({
                                    url: '../../extjs-crudmvc/php/setor/importSetor.php',
                                    waitMsg: 'Uploading your file...',
                                    success: function(fp, o) {
                                        Ext.Msg.alert('Success', 'Your file has been uploaded.');
                                        store.load();
                                        win.close();
                                    }
                                });
                            }
                        }
                    }]
                }
            ],
        })
        win.show()
    },

    onSaveSetor: function(btn, e, eOpts){
        var win = btn.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            record = form.getRecord(),
            grid = Ext.ComponentQuery.query('setoresgrid')[0],
            store = grid.getStore();

            if(record){
                record.set(values);
            } else { 
                var setor = Ext.create('ExtMVC.model.Setor', {
                    nome:  values.nome,
                    abreviacao: values.abreviacao
                });

                store.insert(0, setor);
            }

            store.sync();

            win.close();
    },

    openFormSubsetor: function(title){
        var win = Ext.create('ExtMVC.view.func.SubsetorForm');
        win.setTitle(title);
        return win;
    },

    onEditSubsetor: function(grid, record, item, index, e, eOpts){
        var win = this.openFormSubsetor('Editar Subsetor - ' + record.get('subsetor_nome'));
        var form  = win.down('form');
        form.loadRecord(record);
    },
 
    onAddSubsetor: function(btn, e, eOpts){
        this.openFormSubsetor('Novo Subsetor');
    },

    onCancelFormSubsetor: function(btn,e,eOpts){
        var win = btn.up('window');
        var form = win.down('form');
        form.getForm().reset();
        win.close();
    },

    onDeleteSubsetor: function(btn, e, eOpts){
        var grid = btn.up('grid');
        var records = grid.getSelectionModel().getSelection();
        var store = grid.getStore();
        store.remove(records);
        store.sync();
    },

    onReportSubsetorClick: function(btn, e, eopts){
        var store = Ext.ComponentQuery.query('subsetoresgrid')[0].getStore();
        var records = store.getRange();
        var dataToSend = records.map(function(record) {
            return record.getData();
        });
    
        var encodedData = encodeURIComponent(JSON.stringify(dataToSend));
    
        var win = Ext.create('Ext.window.Window', {
            title: 'Visualizar',
            width: 600,
            height: 200,
            modal: true,
            layout: 'fit',
            maximizable: true
        });
    
        var href = '../../extjs-crudmvc/php/subsetor/exportSubsetor.php?data=' + encodedData;
        win.html = '<iframe src="' + href + '" name="principal" width="100%" height="100%" scrolling="auto" frameborder="0"></iframe>';
        win.show();
    },

    onImportSubsetor: function(btn, e, eOpts){
        var grid = Ext.ComponentQuery.query('subsetoresgrid')[0];
        var store = grid.getStore();
        var win = Ext.create('Ext.window.Window', {
            title: 'Import',
            width: 600,
            height: 200,
            padding: 35,
            modal: true,
            layout: 'fit',
            maximizable: true,
            items: [
                {
                    xtype: 'form',
                    title: 'Import file',
                    padding: 2,
                    width: 400,
                    bodyPadding: 10,
                    frame: true,
                    items:[{
                        xtype: 'filefield',
                        name: 'file',
                        fieldLabel: 'Arquivo',
                        labelWidth: 50,
                        msgTarget: 'side',
                        allowBlank: false,
                        anchor: '100%',
                        buttonText: 'Selecione o Arquivo',
                        
                    }],
                    buttons: [{
                        text: 'Carregar',
                        handler: function(){
                            var form = this.up('form').getForm();
                            if(form.isValid()){
                                form.submit({
                                    url: '../../extjs-crudmvc/php/subsetor/importSubsetor.php',
                                    waitMsg: 'Uploading your file...',
                                    success: function(fp, o) {
                                        Ext.Msg.alert('Success', 'Your file has been uploaded.');
                                        store.load();
                                        win.close();
                                    }
                                });
                            }
                        }
                    }]
                }
            ],
        })
        win.show()
    },

    onSaveSubsetor: function(btn, e, eOpt){
        var win = btn.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            record = form.getRecord(),
            grid = Ext.ComponentQuery.query('subsetoresgrid')[0],
            store = grid.getStore();

            if(record){
                record.set(values);
            }else{
                var subsetor = Ext.create('ExtMVC.model.Subsetor', {
                    subsetor_nome: values.subsetor_nome,
                    setor_name: values.setor_name
                });
                store.insert(0, subsetor);
            }
            store.sync();
            win.close()
    }
});
