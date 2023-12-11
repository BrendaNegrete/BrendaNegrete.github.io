/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {//Método invocado cuando se selecciona un elemento en el listado de clientes
        var panel=Ext.create('app.view.clientes.PanelCliente');
        var miGrid = panel.down('gridclientes');// referencia al grid dentro del panel de clientes
        miGrid.setHeight(250);// se actualiza el alto de la lista
        miGrid.updateLayout();
        var win=Ext.create('app.view.common.WindowStatusBar', {
            width:800,
            height:700,

            title:'Seleccionar cliente',
            items: panel,

            buttons:[{
                text:'Seleccionar',
                scope:'this',
                handler: function(){

                    panel.seleccionar();
                }
            },{
                    text:'Cancelar',
                    handler: function(){
                        win.hide()
                    }
            }]
        });
        panel.on({
            selectcliente: function(panelclientes, rec){
            win.hide();
                Ext.Msg.confirm('Cliente'+rec.data.cliente_k,'El cliente seleccionado fue '+rec.data.nombre);
            }
        });

        win.show();
        win.center();
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
