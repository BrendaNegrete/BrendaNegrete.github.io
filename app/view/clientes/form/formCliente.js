Ext.define('app.view.clientes.form.formCliente',{
    extend: 'Ext.form.Panel',
    xtype:'formcliente',
    bodyPadding:10,
    initComponent: function () {
        Ext.apply(this, { //configuraciones iniciales al formulario
            fieldDefaults:{
                labelAlign:'right',// Alineación de las etiquetas a la derecha
                labelWidth:110,
                msgTarget:'under',// Mostrar mensajes de error debajo de los campos
                anchor: '100%',
                allowBlank:false // No permitir campos en blanco
            },
            defaultType:'textfield',// Tipo de campo predeterminado para los elementos del formulario
            items:[{
                fieldLabel:'* Nombre',
                emptyText:'Este campo es obligatorio...',
                name:'txt_nombre'
            },{
                fieldLabel:'* Correo',
                vtype:'email',
                emptyText:'ejemplo@extjs.mx',
                name:'txt_correo'
            },{
                xtype:'displayfield',// Campo de visualización (solo lectura)
                fieldLabel:'Apodo',
                name:'home_Score',
                value:'Por asignar........'
            },{
                xtype:'numberfield',// Campo de números
                fieldLabel:'Edad',
                maxValue:99,
                minValue:0,
                allowDecimals: false,
                name:'txt_edad'
            },{
                fieldLabel:'Fecha de nacimiento',
                xtype:'datefield',
                maxValue: new Date(),// Fecha máxima permitida
                format:"d-m-Y",
                allowBlank: true,
                name:'txt_fnacimiento'
            },{
                xtype:'radiogroup',// botones de opción
                fieldLabel: 'Genero',
                vertical: true,
                items:[
                    {boxLabel:'Hombre', name:"txt_genero", inputValue:'1'},
                    {boxLabel:'Mujer', name:"txt_genero", inputValue:'2', checked:true}
                ]
            },{
                xtype:'checkboxgroup',//  casillas de verificación
                fieldLabel:'Idiomas',
                columns:2,
                vertical:true,
                items:[
                    {boxLabel:'Frances', name:"txt_idioma", inputValue:'1'},
                    {boxLabel:'Portugues', name:"txt_idioma", inputValue:'2', checked:true},
                    {boxLabel:'Aleman', name:"txt_idioma", inputValue:'3'},
                    {boxLabel:'Ingles', name:"txt_idioma", inputValue:'4'},
                ]
            }]
        });
        this.callParent();
    },
    doSubmit:function(){ // Enviar el formulario al servidor
        this.getForm().submit({
            url:'server/doformpost.json',
            success: function(form, result){
                console.info(result);
            }
        });
    },
    doLoad: function(){ // Cargar datos al formulario desde el servidor
        this.getForm().load({
            url:'server/doformload.json',
            success:function(form, result){
                    console.info(result.result);
            }
        });
    }
});