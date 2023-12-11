Ext.define('app.view.common.WindowForm',{
    extend: 'Ext.window.Window',

    buttons:[{
        text:'Submit',
        handler: function(){
            var form= this.up('window').down('formcliente');
            if(form.isValid())
                form.doSubmit();
        }
    },{
        text:'Load',
        handler:function(){
            var form= this.up('window').down('formcliente');
            form.doLoad();
        }
    },{
        text:'Cerrar',
        handler: function(){
           this.up('window').close();
        }
    }]
   // window.show();

});