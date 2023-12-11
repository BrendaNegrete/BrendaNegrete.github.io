Ext.define('app.view.clientes.PanelClientesController',{
    extend:'Ext.app.ViewController',
    alias:'controller.panelclientesctr',// Alias del controlador
    showClienteDetalle: function(grid, rec){
        console.info(rec);

        var panel=this.lookupReference('paneldetalle');// referencia al panel de detalle
        panel.update(rec.data); //Actualizar el contenido del panel con los datos del registro seleccionado
    },
    agregarCliente: function(){
        var window=Ext.create('app.view.common.WindowForm',{
            modal:true,
            title:'Agregar un nuevo cliente',
            height:480,
            width:400,
            items:[
                {xtype:'formcliente'}// Agregar como componente un formulario de cliente a la ventana
            ]
        });
        window.show();
    }
});