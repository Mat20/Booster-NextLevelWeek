import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
      { title: 'Lâmpadas', image: 'lampadas.svg' },
      { title: 'Pilhas e Baterias', image: 'baterias.svg' },
      { title: 'Papéis e Palelão', image: 'papeis-paleao.svg' },
      { title: 'Resídous Eletrônicos', image: 'eletronicos.svg' },
      { title: 'Resíduos Organicos', image: 'organicos.svg' },
      { title: 'Óleo de Conzinha', image: 'oleo.svg' }
    ]);
}