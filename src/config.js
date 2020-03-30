global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5791ef';
global.EMAIL_TMPL = 'olá, <strong>{0}</strong>, seja bem vindo à Node Store!';

module.exports ={
    connectionString: 'mongodb+srv://bruno:bruno@node-store-mwbux.azure.mongodb.net/test?retryWrites=true&w=majority',//cloudmongodb
    sendgridkey: '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',//enviar email
    containerConnectionString: 'TBD'//armazenar img produto azure
}