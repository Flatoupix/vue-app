module.exports = {
  filenameHashing: false,
  publicPath: '',
  outputDir: 'build',
  //productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: {
      '/services': {
        // Repertoire virtuel à mettre en suffix à toutes les requêtes AJAX
        target:
          'http://ext.adress.com/' + 'Specif/EUDO_PRODUIT_PUBLIC/root/ProduitPublic/gru/demande', // Adresse cible sur laquelle se trouve les web services. // Exemple de chemin extact d'accès aux websevices/
      },
    },
  },
}
// Attention, toutes les modifications que vous serez amenés à faire au sein de se fichier ne seront pas prises en compte avec
// le "hot reload" du npm run serve.
// Il faudra donc relancer cette commande.
