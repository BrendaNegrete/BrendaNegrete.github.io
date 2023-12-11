Ext.define('app.view.clientes.PanelCliente',{
    extend:'Ext.Panel',
    xtype:'panelclientes',

    controller:'panelclientesctr',
    tbar:[{ // Configura la barra superior del panel con un botón para agregar clientes
        text:'Agregar cliente',
        iconCls:'x-fa fa-plus',
        handler: 'agregarCliente'

    }, '->',{//alinea el boton a la derecha
        xtype:'comboclientes',
        emptyText:'Buscar cliente',
        width:300
    }],
    items:[{
        region:'center',
        layout:'fit',
        xtype:'tabpanel',
        items:[{  //  elementos del panel
            title:'Listado de clientes',
            xtype:'gridclientes',
            reference:'gridlistado',
            listeners:{
                itemclick:'showClienteDetalle'// Muestra la info. del cliente al hacer clic en un ítem del grid
            }
        }],
        bbar:['Bottom bar (zona baja)','-',{// Configura la barra inferior  para agregar nuevo contenido.
            text:'Agregar un nuevo contenido',
            scale:'large',
            handler: function(){

                var num= Ext.id(), // Genera un identificador único y crea un nuevo panel
                panel= Ext.create('Ext.Panel',{
                    title:'Detalle cliente'+num,
                    html:'Info cliente '+num,
                    closable: true,
                    layout:{
                        type:'hbox',
                        align:'stretch'
                    },
                    items:[{
                        title:'detalle del cliente' + num,
                        xtype:'panel',
                        flex:3,//el elemento con flex: 3 ocupará aproximadamente tres veces más espacio que un elemento con flex: 1
                        layout:'card',
                        items:[{
                            bodyStyle:'background-color: #BBC font-size: 30px; color:#345 ',
                            html:'detalle 1'
                        }, {
                            bodyStyle:'background-color: #A6C font-size: 30px; color:#345 ',
                            html:'detalle 2'
                        }],
                        buttons:[{ // Configura botones para cambiar entre paneles dentro del layout
                                text:'Panel 1',
                                scale:'large',
                                handler: function(){
                                    this.up('panel').layout.setActiveItem(0);
                                }
                            }, {
                                text:'Panel 2',
                                scale:'large',
                                handler: function(){
                                    this.up('panel').layout.setActiveItem(1);
                                }
                            }
                        ]
                    },{
                        text:'al seleccionar panel 2',
                        flex: 1,
                        bodyStyle:'background-color: #FED ; font-size: 30px; color:#765 '
                    }]
                });
                this.up('tabpanel').add(panel);// 'tabpanel'->Contenedor que permite organizar contenido en pestañas. Agrega el nuevo panel al panel de pestañas
                this.up('tabpanel').setActiveItem(panel);

            }
        }]
    },{ // para mostrar detalles de cliente utilizando datos de un modelo
        height:190,
        region:'south',
        bodyPadding:10,
        reference:'paneldetalle',
        tpl:'<div><div style="float: left; margin-right:20px;"> <img src="resources/img/avatar/{nombre}.jpg" width="150" height="150"></div>'+
                '<h2>{nombre}</h2>'+
                '<span style="font-size: 20px; color: #5FADD;">{rolnombre}</span><br>'+
                '<span>{email}</span><br>'
            +'</div>',

        bodyStyle:'background-color: white ; font-size: 10px; color:#000 '
    }],

    seleccionar: function(){//dispara un evento personalizado selectcliente
        var rec= this.lookupReference('gridlistado').getSelectionModel().getSelection();// Obtiene la selección actual en la cuadrícula
        this.fireEvent('selectcliente', this, rec[0]);

    }
 });