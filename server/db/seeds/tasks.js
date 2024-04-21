/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {
      id: 1,
      task: 'Make the bed',
      priority: 'Medium',
      details: 'Make the room look neat by making the bed',
      completed: false,
    },
    {
      id: 2,
      task: 'Puppy training',
      priority: 'High',
      details: 'Burn his energy and teach him some manners',
      completed: false,
    },
    {
      id: 3,
      task: 'Cook dinner',
      priority: 'Medium',
      details: 'Dont starve but you can make any type of meal',
      completed: false,
    },
  ])
}
