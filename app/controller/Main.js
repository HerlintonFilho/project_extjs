Ext.define('ExtMVC.controller.Main', {

    extend: 'Ext.app.Controller',
    models: [
    	'ExtMVC.model.Func',
        'ExtMVC.model.Cargo'
    ],

    stores: [
    	'ExtMVC.store.Func',
        'ExtMVC.store.Cargo'
    ],
    views: [
        'ExtMVC.view.func.Grid',
        'ExtMVC.view.func.Funcionario',
        'ExtMVC.view.func.Cargo'
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
            'setoresgrid button#delete':{
                click: this.onDeleteSetor
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
            'subsetoresgrid button#delete':{
                click: this.onDeleteSubsetor
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
        console.log(record);
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

    onSaveClick: function(btn, e, eOpts){
        var win = btn.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            record = form.getRecord(),
            grid = Ext.ComponentQuery.query('funcionariosgrid')[0],
            store = grid.getStore();
            console.log('OIIIIIIIII');

        if (record){
            
            record.set(values);
            console.log('Atualiza');

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
                cargo: values.selectCargo,
                setor: values.selectSetor,
                subsetor: values.selectSubSetor
            });

            store.insert(0,func);
        }

        store.sync();

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
        console.log(form.getComponent('comboSelect'))
        console.log(record.data.status_cargo);
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

    onSaveCargo: function(btn, e, eOpts){
        var win = btn.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            record = form.getRecord(),
            grid = Ext.ComponentQuery.query('cargosgrid')[0],
            store = grid.getStore();
            console.log(values);

        if (record){
            
            record.set(values);

        } else { 

            var cargo = Ext.create('ExtMVC.model.Cargo',{
                description: values.description,
                status_cargo: values.selectStatus
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
                    setor_name: values.selectSetor
                });
                store.insert(0, subsetor);
            }
            store.sync();
            win.close()
    }
});