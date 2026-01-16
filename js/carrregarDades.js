export async function cargarDatos() {
  const cartesRes = await fetch('/data/cartes.json');
  const personatgesRes = await fetch('/data/personatges.json');

  const data_cartes = await cartesRes.json();
  const data_personatges = await personatgesRes.json();

  return { data_cartes, data_personatges };
}