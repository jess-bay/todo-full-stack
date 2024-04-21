/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('task')
    table.string('priority')
    table.string('details')
    table.boolean('completed').defaultTo(false)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('todos')
}
