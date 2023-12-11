Ext.define('app.store.clientes.StoreClientes',{
    extend:'Ext.data.Store',
    model:'app.model.clientes.ModelClientes',
    proxy:{
        type:'ajax',// Usa el tipo 'ajax' para manejar las solicitudes HTTP
        url:'server/listcustomers.json', // URL de donde se cargarán los datos
        reader:{
            type:'json',
            rootProperty:'data',//contiene los datos en la respuesta del servidor
            totalProperty:'numFilas'//número total de filas en la respuesta del servidor
        }
    }
});