export async function cargarDatos() {
  const cartesRes = await fetch('/reigns/data/cartes.json');
  const personatgesRes = await fetch('/reigns/data/personatges.json');

  const data_cartes = await cartesRes.json();
  const data_personatges = await personatgesRes.json();

  return { data_cartes, data_personatges };
}