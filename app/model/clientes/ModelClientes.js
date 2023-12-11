Ext.define('app.model.clientes.ModelClientes',{
    extend:'Ext.data.Model',
    fields:[
            {name:"cliente_k", type:'int'},
            "nombre",
            "apellido_paterno",
            "apellido_materno",
            {name:"fecha_nacimiento",type:'date',format:'Y-m-d'},
            "email",
            {name:"genero", type:'int'},
            {name:"limite_credito", type:'float'},
            "rolnombre",
            "colorfavorito",
            {name:"estatus", type:'int'}
    ],
    nombreToHTML:function(){
        return this.data.apellido_paterno+' '+this.data.apellido_materno+', <b>'+this.get('nombre')+'</b>';
    }
});