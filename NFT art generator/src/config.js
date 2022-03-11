const description =
  "Space related NFTs for the project Specethusiasts";
const baseUri = "ipfs://";

const layersOrder = [
  { name: "Background" },
  { name: "Planet" },
  { name: "PlanetRing" },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const uniqueDnaTorrance = 10000;

const editionSize = 10;

module.exports = {
  layersOrder,
  format,
  editionSize,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
};
