exports.up = function(knex) { //criar
    return knex.schema.createTable('incidents', function (table) {
      table.increments()

      table.string('title').notNullable()
      table.string('description').notNullable()
      table.decimal('value').notNullable()

      table.string('ong_id').notNullable()

      table.foreign('ong_id').references('id').inTable('ongs') //foreign key
    })
  };
  
  exports.down = function(knex) { //deletar
    return knex.schema.dropTable('incidents')
  };
  