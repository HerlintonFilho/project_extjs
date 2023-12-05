Ext.define('ExtMVC.view.func.FuncForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.funcform',

    height: 400,
    width: 600,
    layout: 'fit',
    iconCls: 'icon-user',
    title: 'Editar/Criar Funcionário',
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
                    name: 'sobrenome',
                    fieldLabel: 'Sobrenome',
                    allowBlank: false
                },
                {
                    xtype: 'datefield',
                    name: 'data_nasc',
                    fieldLabel: 'Data de Nascimento',
                    allowBlank: false,
                    format: 'd/m/Y',
                    submitFormat: 'Y-m-d',
                    maskRe: /[0-9/]/
                },
                {
                    xtype: 'numberfield',
                    name: 'idade',
                    fieldLabel: 'Idade',
                    allowBlank: false
                },
                {
                    xtype: 'radiogroup',
                    name: 'sexo',
                    fieldLabel: 'Sexo',
                    columns: 2,
                    items: [
                        {
                            boxLabel: 'Masculino',
                            name: 'opcao',
                            inputValue: 'Masculino'
                        },
                        {
                            boxLabel: 'Feminino',
                            name: 'opcao',
                            inputValue: 'Feminino'
                        }
                    ],
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'salario',
                    fieldLabel: 'Salario',
                    maskRe: /[0-9,.]/,
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'telefone',
                    fieldLabel: 'Telefone',
                    allowBlank: false,
                    maskRe: /[0-9()-]/,
                    maxLength: 14,
                    enforceMaxLength: true
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email',
                    allowBlank: false,
                    vtype: 'email',
                    emptyText: 'usuario@email.com'
                },
                {
                    xtype: 'combobox',
                    name:'cargo',
                    inputId: 'selectCargo',
                    fieldLabel: 'Cargo',
                    store: 'ExtMVC.store.CargoSelect',
                    displayField: 'description',
                    valueField: 'description',
                    editable: false
                },
                {
                    xtype: 'combobox',
                    name: 'setor',
                    fieldLabel: 'Setor',
                    inputId: 'selectSetor',
                    store: 'ExtMVC.store.Setor',
                    displayField: 'nome',
                    valueField: 'nome',
                    editable: false,
                    listeners: {
                        select: function (combo, record, eOpts) {
                            var subsetorCombo = combo.up('form').down('combobox[name=subsetor]');
                            var subsetorStore = Ext.getStore('ExtMVC.store.Subsetor');
                            console.log(record);
                            console.log(subsetorStore);
                            
                            subsetorCombo.clearValue();
                            subsetorStore.clearFilter();
                            
                            if (record) {
                                console.log(subsetorStore.filter('setor_name', record.get('setor_name')));
                            }
                        }
                    }
                },
                {
                    xtype: 'combobox',
                    name: 'subsetor',
                    fieldLabel: 'Subsetor',
                    inputId: 'selectSubSetor',
                    store: 'ExtMVC.store.Subsetor',
                    displayField: 'subsetor_nome',
                    valueField: 'subsetor_nome',
                    editable: false
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