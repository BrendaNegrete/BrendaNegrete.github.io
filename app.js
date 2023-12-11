/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'app.Application',

    name: 'app',

    requires: [
        // This will automatically load all classes in the app namespace
        // so that application classes do not need to require each other.

        'app.view.common.WindowForm',
        'app.view.common.WindowStatusBar',
        'app.view.login.WindowLogin',
        'app.view.login.WindowLoginController',
        'app.view.clientes.PanelCliente',
        'app.view.clientes.form.formCliente',
        'app.store.clientes.StoreClientes',
        'app.view.clientes.form.ComboClientes',
        'app.view.clientes.GridClientes',
        'app.model.clientes.ModelClientes',
        'app.view.clientes.PanelClientesController'
    ],

    // The name of the initial view to create.
    mainView: 'app.view.main.Main'
});
