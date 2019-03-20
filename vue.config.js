module.exports = {
  filenameHashing: false,
  publicPath: "",
  outputDir: "build",
  //productionSourceMap: false,
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    proxy: {
      
      '/services': { // Repertoire virtuel à mettre en suffix à toutes les requêtes AJAX
        target:
          'http://ext.adress.com/' // Adresse cible sur laquelle se trouve les web services. 
          
          + 'Specif/EUDO_PRODUIT_PUBLIC/root/ProduitPublic/gru/demande', // Exemple de chemin extact d'accès aux websevices/
      },
    },
  },
};
