Ext.define('app.view.login.WindowLoginController',{
    extend:'Ext.app.ViewController',

    alias:'controller.windowloginctr',

    hacerLogin: function (){
        var formulario = this.lookupReference('formulario');//Obtener referencia al formulario
        formulario.getForm().submit({ //Enviar la solicitud al servidor
            url: 'server/dologin.json', //URL para la solicitud de inicio de sesión
            scope: this,
            success: function(response,opts){//Función ejecutada en caso de éxito
                console.dir(opts.result);
                this.getView().close();
                Ext.Msg.alert('Hola', 'Bienvenido de nuevo '+ opts.result.fullname);
            },
            failure: function(response, opts){ // Función ejecutada en caso de error

                console.log("Error:", response.status);
            }
        });
    }

});