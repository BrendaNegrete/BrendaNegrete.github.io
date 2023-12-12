Ext.define('app.view.login.WindowLoginController',{
    extend:'Ext.app.ViewController',

    alias:'controller.windowloginctr',

    hacerLogin: function (){
        var datos = this.lookupReference('formulario').getValues();//Obtener referencia al formulario
        Ext.Ajax.request({ //Enviar la solicitud al servidor
            url: 'server/dologin.json', //URL para la solicitud de inicio de sesión
            scope: this,
            params: datos,
            success: function(response,opts){//Función ejecutada en caso de éxito
                var obj=Ext.decode(response.responseText);
                console.dir(obj);
                this.getView().close();
                Ext.Msg.alert('Hola', 'Bienvenido de nuevo '+ obj.fullname);
            },
            failure: function(response, opts){ // Función ejecutada en caso de error

                console.log("Error:", response.status);
            }
        });
    }

});
