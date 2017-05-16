SystemJS.config({
    //From where we want to get the files
    baseURL: '/dist',
    packages: {
        //To avoid extension
        '/dist': {
            defaultExtension: 'js'
        }
    }
});