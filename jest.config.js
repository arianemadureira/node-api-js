// jest.config.js

module.exports = {
  // Diretório onde seus arquivos de teste estão localizados
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  // Reporter a ser utilizado para gerar os relatórios
  reporters: [
    "default", 
    ["jest-junit", { outputDirectory: "./test", outputName: "junit.xml" }]
  ],
  // Outras opções de configuração do Jest
};
