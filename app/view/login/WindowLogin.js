Ext.define('app.view.login.WindowLogin',{
    extend:'Ext.window.Window',
    controller:'windowloginctr',
    title: "Bienvenido Usuario",
            height: 200,
            width: 400,
            layout: 'fit',
            draggable:false,
            closable:false,
            modal:true,
            buttonAlign:'center',
            items:[{
                xtype:'form',
                bodyPadding:10,
                reference:'formulario',  // Referencia al formulario para acceder a él desde el controlador
                defaults:{
                    xtype:'textfield',
                    allowBlank: false
                },
                items:[{
                    fieldLabel: 'Usuario', // Etiqueta del campo de texto
                    name:'usuario',
                    vtype:'email'// Validación de tipo de correo electrónico
                },{
                    inputType:'password', // Tipo de entrada de contraseña
                    fieldLabel: 'Password',
                    name:'pass'
                }],
            }],
            buttons:[{
                iconCls:"x-fa fa-user",
                text:'Ingresar',
                handler: 'hacerLogin' //// Manejador del evento clic asociado al controlador
            }]


});