Ext.define('app.view.clientes.GridClientes',{
    extend:'Ext.grid.GridPanel',
    xtype:'gridclientes',
    initComponent:function(){ // Método de inicialización del componente
        var mistore=Ext.create('app.store.clientes.StoreClientes',{
            autoLoad:true//argar automáticamente los datos
        });

        Ext.apply(this,{
            store:mistore,
            columns:[
                {text:'Nombre', dataIndex:'nombre', flex:1,
                    renderer:function(val,meta,rec){
                        return rec.nombreToHTML();
                    }
                },
                {text:'Email', dataIndex:'email', width:160, menuDisabled:true},
                {text:'Fecha nacimiento', dataIndex:'fecha_nacimiento', width:160, menuDisabled:true,
                    renderer:Ext.util.Format.dateRenderer('d-m-Y')
                },
                {text:'Estatus', dataIndex:'estatus', width:100, menuDisabled:true, //muestra "Inactivo" en rojo si el estatus es diferente de cero
                    renderer:function(val,mett,rec){
                        if(rec.data.estatus!=0)
                            return '<span style="color:#F00;">Inactivo</span>';
                        return '';
                    }
                },{xtype:'actioncolumn', width:50, items:[{ //  botones de edición y eliminación
                    icon:'resources/img/icon/edit.png',
                    tooltip:'Edit',
                    handler: function(grid, rowIndex, colIndex){
                        var rec=grid.getStore().getAt(rowIndex);
                        alert("Edit"+rec.get('nombre'));
                    }
                },{
                    icon:'resources/img/icon/delete.png',
                    tooltip:'Delete',
                    handler: function(grid, rowIndex, colIndex){
                        var rec=grid.getStore().getAt(rowIndex);
                        Ext.Msg.confirm('Eliminar cliente','Esta completamente seguro de querer'+ // Muestra un cuadro de confirmación antes de eliminar el cliente
                        ' eliminar a <b>'+rec.get('nombre')+' '+rec.data.apellido_paterno+'</b>?',
                        function (respuesta){
                            if(respuesta=='yes'){
                                grid.store.remove(rec);
                            }
                        });
                    }
                }]}
            ],
            dockedItems: [{
                xtype:'pagingtoolbar',
                store:mistore,
                dock: 'bottom',
                displayInfo:true
            }]
        });
        this.callParent();//para ejecutar la inicialización de la clase padre
    }
});